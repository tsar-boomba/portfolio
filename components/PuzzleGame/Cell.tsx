import { Box, lighten } from '@mantine/core';
import { DefaultPieceTypes } from '@tstris/core';
import { memo } from 'react';

const getPieceColor = (piece: '' | DefaultPieceTypes) => {
	if (piece == 'I') {
		return '#40E0D0';
	} else if (piece == 'O') {
		return '#FFFF00';
	} else if (piece == 'J') {
		return '#0000FF';
	} else if (piece == 'L') {
		return '#FFA500';
	} else if (piece == 'T') {
		return '#800080';
	} else if (piece == 'Z') {
		return '#FF0000';
	} else if (piece == 'S') {
		return '#008000';
	} else {
		return 'transparent';
	}
};

// Use memo for cell component to save a lot of rerenders
// eslint-disable-next-line react/display-name
export const Cell = memo(
	({
		piece,
		size,
		noBorder,
	}: {
		piece: '' | DefaultPieceTypes;
		size: number;
		noBorder?: boolean;
	}) => {
		const color = getPieceColor(piece);

		return (
			<Box
				style={{
					border: !noBorder ? '0.5px solid grey' : undefined,
					margin: 0,
					width: size,
					height: size,
				}}
			>
				<Box
					style={{
						borderTopColor: color !== 'transparent' ? lighten(color, 0.2) : undefined,
						borderLeftColor: color !== 'transparent' ? lighten(color, 0.2) : undefined,
						backgroundColor: getPieceColor(piece),
						width: size,
						height: size,
					}}
				></Box>
			</Box>
		);
	},
);
