import { Paper, SimpleGrid, useComputedColorScheme, useMantineTheme } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { DefaultPieceTypes, Tstris } from '@tstris/core';
import { KeyboardEventHandler } from 'react';
import { Cell } from './Cell';

export const Board = ({
	board,
	onKeyDown,
	status,
	size,
}: {
	board: DefaultPieceTypes[][];
	onKeyDown: KeyboardEventHandler;
	status: Tstris['status'];
	size: number;
}) => {
	const theme = useMantineTheme();
	const colorScheme = useComputedColorScheme('light');
	const ref = useFocusTrap(status === 'playing');

	return (
		<Paper
			style={{
				zIndex: 1,
				boxShadow: '0px 0px 24px 0px #00000080',
				clipPath: 'inset(0px -24px 0px 0px)',
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
				backgroundColor: colorScheme === 'dark' ? undefined : theme.colors.gray[0],
			}}
			p={size}
		>
			<SimpleGrid
				tabIndex={0}
				ref={ref}
				onKeyDown={(e) => {
					e.preventDefault();
					onKeyDown(e);
				}}
				spacing={0}
				cols={10}
				style={{
					border: `1px solid ${colorScheme === 'dark' ? 'white' : 'black'}`,
				}}
			>
				<button style={{ display: 'none' }}></button>
				{board
					.flatMap((piece) => piece)
					.map((piece, i) => (
						<Cell key={i} piece={piece} size={size} />
					))}
			</SimpleGrid>
		</Paper>
	);
};
