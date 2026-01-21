import {
	type Component,
	createEffect,
	createMemo,
	createSignal,
	Index,
	onCleanup,
	onMount,
	Show,
} from 'solid-js';
import { AlbumCover } from './AlbumCover';
import styles from './NowPlaying.module.scss';
import { NowPlayingProvider, useNowPlaying } from './store';
import { IS_BROWSER, type Playing } from './utils';

export const NowPlaying = () => {
	return (
		<NowPlayingProvider>
			<NowPlayingWrapper />
		</NowPlayingProvider>
	);
};

const NowPlayingWrapper = () => {
	const playing = useNowPlaying();

	// Update data whenever user interacts with site
	const handleInteraction = () => {
		if (playing) {
			playing.update();
		}
	};

	onMount(() => {
		if (IS_BROWSER) {
			document.addEventListener('mousedown', handleInteraction);
			document.addEventListener('touchstart', handleInteraction);
		}
	});

	onCleanup(() => {
		if (IS_BROWSER) {
			document.removeEventListener('mousedown', handleInteraction);
			document.removeEventListener('touchstart', handleInteraction);
		}
	});

	return (
		<Show when={playing?.store.playing} fallback={null}>
			{playing && (
				<NowPlayingInner
					playing={playing.store.playing as Playing}
					update={playing.update}
				/>
			)}
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
const Progress: Component<{ playing: Playing; update: () => Promise<void> }> = (
	props,
) => {
	let displayProgress = 0;
	let ref: HTMLDivElement | undefined;
	let progressInterval: number;
	const updateDisplayProgress = () => {
		if (displayProgress >= props.playing.playing.duration + 1) {
			// Song probably ended, check API for new song
			props.update();
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

const NowPlayingInner: Component<{
	playing: Playing;
	update: () => Promise<void>;
}> = (props) => {
	let titleRef: HTMLAnchorElement | undefined;
	const [isOverflowing, setIsOverflowing] = createSignal(false);

	const checkOverflow = () => {
		if (titleRef) {
			// If the content is wider than the container, trigger scrolling
			setIsOverflowing(titleRef.scrollWidth > titleRef.clientWidth);
		}
	};

	// Re-check whenever the song name changes
	createEffect(() => {
		props.playing.playing.name; // Track the name
		checkOverflow();
	});

	onMount(() => {
		checkOverflow();
		window.addEventListener('resize', checkOverflow);
	});

	return (
		<div class={styles.card}>
			<p class={styles.text}>Isaiah's listening to...</p>
			<div class={styles['main-info']}>
				<AlbumCover playing={props.playing} />
				<div class={styles['title-container']}>
					<a
						ref={titleRef}
						class={styles.title}
						classList={{ [styles['is-scrolling']]: isOverflowing() }}
						href={props.playing.playing.url ?? undefined}
						title={props.playing.playing.name}
						target='_blank'
					>
						<span class={styles['scroll-text']}>{props.playing.playing.name}</span>
						{/* Only show the second span if we are actually scrolling */}
						<Show when={isOverflowing()}>
							<span class={styles['scroll-text']} aria-hidden='true'>
								{props.playing.playing.name}
							</span>
						</Show>
					</a>
					<Artists playing={props.playing} />
				</div>
				{/* TODO: device icon & name */}
			</div>
			<Progress playing={props.playing} update={props.update} />
		</div>
	);
};
