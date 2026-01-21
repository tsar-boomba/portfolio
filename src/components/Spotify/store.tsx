import {
	createContext,
	onCleanup,
	onMount,
	type ParentComponent,
	useContext,
} from 'solid-js';
import { createStore, reconcile, type Store } from 'solid-js/store';
import { FUNCTION_URL, type Playing } from './utils';

type StoreType = { playing: Playing | null };

const Context = createContext<{
	store: Store<StoreType>;
	update: () => Promise<void>;
}>();

const MIN_UPDATE_INTERVAL_MS = 2500;
export const NowPlayingProvider: ParentComponent = (props) => {
	const [store, setStore] = createStore<StoreType>({ playing: null });
	let interval: number;
	let unmounted = false;

	let lastUpdateAtMs = 0;
	const update = async () => {
		const now = Date.now();
		if (now - lastUpdateAtMs < MIN_UPDATE_INTERVAL_MS) return;

		const res = await fetch(`${FUNCTION_URL}/playing`);
		if (res.ok && !unmounted) {
			setStore('playing', reconcile(await res.json()));
			lastUpdateAtMs = now;
		}
	};

	onMount(() => {
		interval = setInterval(update, 10000);
		update();
	});

	onCleanup(() => {
		clearInterval(interval);
		unmounted = true;
	});

	return (
		<Context.Provider value={{ store, update }}>
			{props.children}
		</Context.Provider>
	);
};

export const useNowPlaying = ():
	| {
			store: Store<StoreType>;
			update: () => Promise<void>;
	  }
	| undefined => {
	return useContext(Context);
};
