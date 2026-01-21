import {
	type Component,
	createEffect,
	createMemo,
	Index,
	onCleanup,
	onMount,
	Show,
} from 'solid-js';
import { AlbumCover } from './AlbumCover';
import styles from './NowPlaying.module.scss';
import { NowPlayingProvider, useNowPlaying } from './store';
import type { Playing } from './utils';

export const NowPlaying = () => {
	return (
		<NowPlayingProvider>
			<NowPlayingWrapper />
		</NowPlayingProvider>
	);
};

const NowPlayingWrapper = () => {
	const playing = useNowPlaying();

	return (
		<Show when={playing?.store.playing} fallback={null}>
			<NowPlayingInner playing={playing?.store.playing as Playing} />
		</Show>
	);
};

const Artists: Component<{ playing: Playing }> = (props) => {
	const linkableArtists = createMemo(() =>
		props.playing.playing.artists.filter((artist) => artist.url),
	);

	return (
		<h2 class={styles.artists}>
			<Index each={linkableArtists()}>
				{(artist, i) => (
					<>
						<a href={artist().url ?? ''} target='_blank'>
							{artist().name}
						</a>
						{i === linkableArtists().length - 1 ? <></> : <>, </>}
					</>
				)}
			</Index>
		</h2>
	);
};

const TICK_MS = 250;
const Progress: Component<{ playing: Playing }> = (props) => {
	let displayProgress = 0;
	let ref: HTMLDivElement | undefined;
	let progressInterval: number;
	const updateDisplayProgress = () => {
		if (
			// If local state over 2 seconds past end, update playing
			displayProgress >=
			props.playing.playing.duration + 1
		) {
			// Song ended, check API for new song
			// TODO: trigger update
		}

		displayProgress += TICK_MS / 1000;

		if (ref) {
			ref.style.width = `${(displayProgress / props.playing.playing.duration) * 100}%`;
		}
	};

	onMount(() => {
		progressInterval = setInterval(updateDisplayProgress, TICK_MS);
	});

	createEffect(() => {
		// Always use the progress from the store first
		displayProgress = props.playing.progressSecs;
		updateDisplayProgress();
	});

	onCleanup(() => {
		clearInterval(progressInterval);
	});

	return (
		<div class={styles['progress-container']}>
			<div ref={ref} class={styles.progress} />
		</div>
	);
};

const NowPlayingInner: Component<{ playing: Playing }> = (props) => {
	return (
		<div class={styles.card}>
			<p class={styles.text}>Isaiah's listening to...</p>
			<div class={styles['main-info']}>
				<AlbumCover playing={props.playing} />
				<div>
					<a
						class={styles.title}
						href={props.playing.playing.url ?? undefined}
						target='_blank'
					>
						<h1>{props.playing.playing.name}</h1>
					</a>
					<Artists playing={props.playing} />
				</div>
				<div>{/* TODO: device icon & name */}</div>
			</div>
			<Progress playing={props.playing} />
		</div>
	);
};
