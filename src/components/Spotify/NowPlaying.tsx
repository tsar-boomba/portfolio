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
import { IS_BROWSER, type Playing, type Track } from './utils';

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
			playing.update(false);
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
		<Show
			when={playing?.store.playing || playing?.store.recent[0]}
			fallback={null}
		>
			{playing && (
				<NowPlayingInner
					playing={playing.store.playing as Playing}
					track={
						(playing.store.playing?.playing ||
							playing.store.recent[0].track) as Track
					}
					update={playing.update}
				/>
			)}
		</Show>
	);
};

const Artists: Component<{ playing: Track }> = (props) => {
	const linkableArtists = createMemo(() =>
		props.playing.artists.filter((artist) => artist.url),
	);

	return (
		<span class={styles.artists}>
			<Index each={linkableArtists()}>
				{(artist, i) => (
					<>
						<a href={artist().url ?? ''} target='_blank'>
							{artist().name}
						</a>
						{i === linkableArtists().length - 1 ? null : <>, </>}
					</>
				)}
			</Index>
		</span>
	);
};

const TICK_MS = 250;
const Progress: Component<{
	playing: Playing;
	update: (force: boolean) => Promise<void>;
}> = (props) => {
	let displayProgress = 0;
	let ref: HTMLDivElement | undefined;
	let progressInterval: number;
	const updateDisplayProgress = () => {
		if (displayProgress >= props.playing.playing.duration + 1) {
			// Song probably ended, check API for new song
			props.update(true);
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
	playing: Playing | null;
	track: Track;
	update: (force: boolean) => Promise<void>;
}> = (props) => {
	let titleRef: HTMLAnchorElement | undefined;
	const [isOverflowing, setIsOverflowing] = createSignal(false);

	const checkOverflow = () => {
		if (titleRef) {
			// If the content is wider than the container, trigger scrolling
			setIsOverflowing(titleRef.scrollWidth > titleRef.clientWidth);
		}
	};

	// Check overflow on track change
	createEffect(() => {
		props.track.name; // Subscribe to name changes for this effect
		checkOverflow();
	});

	// Check overflow when title changes size
	onMount(() => {
		if (!titleRef) return;

		// ResizeObserver watches the element itself
		const ro = new ResizeObserver(() => {
			// This fires after the DOM has updated and layout is calculated
			checkOverflow();
		});

		ro.observe(titleRef);

		onCleanup(() => ro.disconnect());
	});

	return (
		<div class={styles.card}>
			<p class={styles.text}>
				Isaiah{props.playing ? ' is ' : ' was '}listening to...
			</p>
			<div class={styles['main-info']}>
				<AlbumCover track={props.track} />
				<div class={styles['title-container']}>
					<a
						ref={titleRef}
						class={styles.title}
						classList={{ [styles['is-scrolling']]: isOverflowing() }}
						href={props.track.url ?? undefined}
						title={props.track.name}
						target='_blank'
					>
						<span class={styles['scroll-text']}>{props.track.name}</span>
						{/* Only show the second span if we are actually scrolling */}
						<Show when={isOverflowing()}>
							<span class={styles['scroll-text']} aria-hidden='true'>
								{props.track.name}
							</span>
						</Show>
					</a>
					<Artists playing={props.track} />
				</div>
				{/* TODO: device icon & name */}
			</div>
			<Show when={props.playing}>
				{/** biome-ignore lint/style/noNonNullAssertion: Show guarantees it is correct  */}
				<Progress playing={props.playing!} update={props.update} />
			</Show>
		</div>
	);
};
