import {
	createContext,
	onCleanup,
	onMount,
	type ParentComponent,
	useContext,
} from 'solid-js';
import { createStore, reconcile, type Store } from 'solid-js/store';
import {
	FUNCTION_URL,
	type Playing,
	type RecentlyPlayed,
	recent,
} from './utils';

type StoreType = { playing: Playing | null; recent: RecentlyPlayed[] };

const Context = createContext<{
	store: Store<StoreType>;
	update: (force?: boolean) => Promise<void>;
}>();

const MIN_UPDATE_INTERVAL_MS = 2500;
export const NowPlayingProvider: ParentComponent = (props) => {
	const [store, setStore] = createStore<StoreType>({
		playing: null,
		recent: [],
	});
	let playingInterval: number;
	let recentInterval: number;
	let unmounted = false;

	let lastUpdateAtMs = 0;
	const updatePlaying = async (force?: boolean) => {
		const now = Date.now();
		if (!force && now - lastUpdateAtMs < MIN_UPDATE_INTERVAL_MS) return;
		lastUpdateAtMs = now;

		const res = await fetch(`${FUNCTION_URL}/playing`);
		if (res.ok && !unmounted) {
			setStore('playing', reconcile(await res.json()));
		}
	};

	const updateRecent = async () => {
		const recentPlays = await recent();
		if (!unmounted) {
			setStore('recent', reconcile(recentPlays));
		}
	};

	onMount(async () => {
		playingInterval = setInterval(() => updatePlaying(true), 10 * 1000);
		recentInterval = setInterval(updateRecent, 60 * 1000);
		setTimeout(() => updateRecent(), 750);
		updatePlaying();
	});

	onCleanup(() => {
		clearInterval(playingInterval);
		clearInterval(recentInterval);
		unmounted = true;
	});

	return (
		<Context.Provider value={{ store, update: updatePlaying }}>
			{props.children}
		</Context.Provider>
	);
};

export const useNowPlaying = ():
	| {
			store: Store<StoreType>;
			update: (force: boolean) => Promise<void>;
	  }
	| undefined => {
	return useContext(Context);
};
