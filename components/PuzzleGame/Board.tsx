import { createStyles, Paper, SimpleGrid } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { DefaultPieceTypes, Tstris } from '@tstris/core';
import { KeyboardEventHandler } from 'react';
import { Cell } from './Cell';

const useStyles = createStyles((theme) => ({
	background: {
		zIndex: 1,
		boxShadow: '0px 0px 24px 0px #00000080',
		clipPath: 'inset(0px -24px 0px 0px)',
		backgroundColor: theme.colorScheme === 'dark' ? undefined : theme.colors.gray[0],
	},
	grid: {
		border: `1px solid ${theme.colorScheme === 'dark' ? 'white' : 'black'}`,
	},
}));

export const Board = ({
	board,
	onKeyDown,
	status,
}: {
	board: DefaultPieceTypes[][];
	onKeyDown: KeyboardEventHandler;
	status: Tstris['status'];
}) => {
	const { classes } = useStyles();
	const ref = useFocusTrap(status === 'playing');

	return (
		<Paper className={classes.background} p='xl'>
			<SimpleGrid
				className={classes.grid}
				tabIndex={0}
				ref={ref}
				onKeyDown={(e) => {
					e.preventDefault();
					onKeyDown(e);
				}}
				spacing={0}
				cols={10}
			>
				<button style={{ display: 'none' }}></button>
				{board
					.flatMap((piece) => piece)
					.map((piece, i) => (
						<Cell key={i} piece={piece} size={30} />
					))}
			</SimpleGrid>
		</Paper>
	);
};
