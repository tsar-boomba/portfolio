'use client';

import {
	Button,
	Center,
	Container,
	Grid,
	Group,
	Kbd,
	Stack,
	Text,
	useComputedColorScheme,
	useMantineTheme,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { DefaultPieceTypes, DEFAULT_PIECE_TYPES } from '@tstris/core';
import { useTstris } from '@tstris/react';
import GradientCard from '../GradientCard';
import { Board } from './Board';
import { Cell } from './Cell';
import { useEffect, useRef } from 'react';

const RenderPiece = ({ shape }: { shape: ('' | DefaultPieceTypes)[][] }) => {
	return (
		<Grid gutter={0} columns={shape.length}>
			{shape.map((row, y) => (
				<Grid.Col span={1} key={y}>
					{row.map((_, x) => {
						const piece = shape[x][y];

						return <Cell key={x} piece={piece} size={30} noBorder />;
					})}
				</Grid.Col>
			))}
		</Grid>
	);
};

export const PuzzleGame = () => {
	const {
		boardWPlayer,
		score,
		level,
		rowsCleared,
		start,
		moveHandler,
		nextQueue,
		restart,
		heldPiece,
		status,
	} = useTstris();
	const theme = useMantineTheme();
	const colorScheme = useComputedColorScheme('light');
	// breaks hydration
	const screen = useViewportSize();
	const firstRender = useRef(true);

	useEffect(() => {
		firstRender.current = false;
	}, []);

	if (firstRender.current || (screen.width !== 0 && screen.width <= 1000))
		return (
			<Container
				py={40}
				style={{
					flexDirection: 'column',
					backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
					textAlign: 'center',
				}}
			>
				<Text style={{ fontSize: 24, fontWeight: 500 }}>
					There would be a falling block puzzle game here if your screen was bigger 😔.
				</Text>
			</Container>
		);

	return (
		<Center
			id='tstris-example'
			py={120}
			style={{
				flexDirection: 'column',
				minHeight: '100vh',
				backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
			}}
		>
			<Container size='xl'>
				<Group w='100%' align='stretch' gap={0}>
					<GradientCard
						style={{
							height: '100%',
							width: 150,
							color: colorScheme === 'dark' ? 'white' : 'black',
						}}
						p='md'
						mr='xl'
					>
						<Stack w='100%' align='center'>
							<Text component='h2' my={0} fz={28}>
								Hold
							</Text>
							{heldPiece ? (
								<RenderPiece shape={DEFAULT_PIECE_TYPES[heldPiece].shape} />
							) : (
								<RenderPiece
									shape={Array.from(Array(3), () => new Array(3).fill(''))}
								/>
							)}
						</Stack>
					</GradientCard>
					<Board board={boardWPlayer} onKeyDown={moveHandler} status={status} />
					<GradientCard
						style={{
							borderTopLeftRadius: '0',
							borderBottomLeftRadius: '0',
							marginLeft: -8,
							zIndex: 0,
							color: colorScheme === 'dark' ? 'white' : 'black',
						}}
					>
						<Stack w={300} align='center'>
							<Text component='h2' my={0} fz={28}>
								Next
							</Text>
							<Stack w='100%' align='center'>
								{nextQueue
									? nextQueue.map((piece, i) => (
											<RenderPiece
												key={i}
												shape={DEFAULT_PIECE_TYPES[piece].shape}
											/>
										))
									: Array(3)
											.fill(0)
											.map((_, i) => (
												<RenderPiece
													key={i}
													shape={Array.from(Array(3), () =>
														new Array(3).fill(''),
													)}
												/>
											))}
							</Stack>
							<Text component='h2' my={0} fz={28}>
								Lines: {rowsCleared}
							</Text>
							<Text component='h2' my={0} fz={28}>
								Level: {level}
							</Text>
							<Text component='h2' my={0} fz={28}>
								Score: {score}
							</Text>
							<Button variant='white' onClick={start}>
								Start
							</Button>
							<Button variant='white' onClick={restart}>
								Restart
							</Button>
						</Stack>
					</GradientCard>
				</Group>
			</Container>
			<Stack fz={18} fw={500} align='center' gap={0}>
				<Text fz={32} fw={500}>
					How To Play
				</Text>
				<Text>
					<Kbd>←</Kbd>/<Kbd>→</Kbd>: Move left/right
				</Text>
				<Text>
					<Kbd>↑</Kbd>: Rotate right
				</Text>
				<Text>
					<Kbd>↓</Kbd>: Soft drop
				</Text>
				<Text>
					<Kbd>Z</Kbd>: Rotate left
				</Text>
				<Text>
					<Kbd>X</Kbd>: Rotate right
				</Text>
				<Text>
					<Kbd>C</Kbd>: Hold
				</Text>
			</Stack>
		</Center>
	);
};
