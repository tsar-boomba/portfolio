import { type Component, createSignal } from 'solid-js';
import styles from './AlbumCover.module.scss';
import type { Track } from './utils';

type Props = {
	track: Track;
	width?: string;
	height?: string;
	maxHeight?: string;
	maxWidth?: string;
};

export const AlbumCover: Component<Props> = (props) => {
	const [imageLoaded, setImageLoaded] = createSignal(false);
	const style = {
		width: props.width,
		height: props.height,
		'max-height': props.maxHeight,
		'max-width': props.maxWidth,
	};

	return (
		<a href={props.track.url ?? undefined} class={styles.container}>
			{!props.track.imageUrl && (
				<div class={styles.noImage} style={style}>
					{/* TODO: music note icon */}
				</div>
			)}
			{props.track.imageUrl && !imageLoaded && (
				<div class={styles.noImage} style={style}>
					{/* TODO: Loading */}
				</div>
			)}
			{props.track.imageUrl && (
				<img
					src={props.track.imageUrl}
					alt={`${props.track.name} Album Cover`}
					style={imageLoaded() ? styles : { display: `none` }}
					class={styles.image}
					onLoadStart={() => setImageLoaded(false)}
					onLoad={() => setImageLoaded(true)}
				/>
			)}
		</a>
	);
};
