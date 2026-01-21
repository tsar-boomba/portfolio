import { type Component, createSignal } from 'solid-js';
import styles from './AlbumCover.module.scss';
import type { Playing } from './utils';

type Props = {
	playing: Playing;
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
		<a href={props.playing.playing.url ?? undefined} class={styles.container}>
			{!props.playing.playing.imageUrl && (
				<div class={styles.noImage} style={style}>
					{/* TODO: music note icon */}
				</div>
			)}
			{props.playing.playing.imageUrl && !imageLoaded && (
				<div class={styles.noImage} style={style}>
					{/* TODO: Loading */}
				</div>
			)}
			{props.playing.playing.imageUrl && (
				<img
					src={props.playing.playing.imageUrl}
					alt={`${props.playing.playing.name} Album Cover`}
					style={imageLoaded() ? styles : { display: `none` }}
					class={styles.image}
					onLoadStart={() => setImageLoaded(false)}
					onLoad={() => setImageLoaded(true)}
				/>
			)}
		</a>
	);
};
