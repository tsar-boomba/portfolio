import { Anchor, Image, Loader } from '@mantine/core';
import { useState } from 'react';
import { TbMusic } from 'react-icons/tb';
import * as classes from './AlbumCover.css';

type Props = {
	src?: string | null;
	albumName?: string | null;
	songLink?: string | null;
	width?: string | number;
	height?: string | number;
	maxHeight?: string | number;
	maxWidth?: string | number;
};

export const AlbumCover = ({
	src,
	albumName,
	songLink,
	width,
	height,
	maxWidth,
	maxHeight,
}: Props) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const styles = { width, height, maxHeight, maxWidth };

	return (
		<Anchor href={songLink ?? undefined} className={classes.container}>
			{!src && (
				<div className={classes.noImage} style={styles}>
					<TbMusic size={32} />
				</div>
			)}
			{src && !imageLoaded && (
				<div className={classes.noImage} style={styles}>
					<Loader size='sm' />
				</div>
			)}
			{src && (
				<Image
					src={src}
					alt={`${albumName} Album Cover`}
					style={imageLoaded ? styles : { display: `none` }}
					className={classes.image}
					onLoadStart={() => setImageLoaded(false)}
					onLoad={() => setImageLoaded(true)}
				/>
			)}
		</Anchor>
	);
};
