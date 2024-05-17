/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
	TbArrowDown,
	TbArrowDownBar,
	TbArrowLeft,
	TbArrowRight,
	TbInbox,
	TbRotateClockwise,
} from 'react-icons/tb';

const RenderPiece = ({ shape, size }: { shape: ('' | DefaultPieceTypes)[][]; size: number }) => {
	return (
		<Grid gutter={0} columns={shape.length}>
			{shape.map((row, y) => (
				<Grid.Col span={1} key={y}>
					{row.map((_, x) => {
						const piece = shape[x][y];

						return <Cell key={x} piece={piece} size={size} noBorder />;
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

	const screenIsSmall = firstRender.current || (screen.width !== 0 && screen.width <= 1000);
	const cellSize = screenIsSmall ? 15 : 30;

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
							width: screenIsSmall ? undefined : 150,
							color: colorScheme === 'dark' ? 'white' : 'black',
						}}
						p={screenIsSmall ? 'xs' : 'md'}
						mr={screenIsSmall ? '0' : 'xl'}
					>
						<Stack w='100%' align='center'>
							<Text component='h2' my={0} fz={screenIsSmall ? 18 : 28}>
								Hold
							</Text>
							{heldPiece ? (
								<RenderPiece
									shape={DEFAULT_PIECE_TYPES[heldPiece].shape}
									size={cellSize}
								/>
							) : (
								<RenderPiece
									shape={Array.from(Array(3), () => new Array(3).fill(''))}
									size={cellSize}
								/>
							)}
						</Stack>
					</GradientCard>
					<Board
						board={boardWPlayer}
						onKeyDown={moveHandler}
						status={status}
						size={cellSize}
					/>
					<GradientCard
						style={{
							borderTopLeftRadius: '0',
							borderBottomLeftRadius: '0',
							zIndex: 0,
							color: colorScheme === 'dark' ? 'white' : 'black',
						}}
					>
						<Stack
							w={screenIsSmall ? undefined : 300}
							align='center'
							gap={screenIsSmall ? 'xs' : 'md'}
							py={screenIsSmall ? 'xs' : 'sm'}
						>
							<Text component='h2' my={0} fz={screenIsSmall ? 18 : 28}>
								Next
							</Text>
							<Stack w='100%' align='center'>
								{nextQueue
									? nextQueue.map((piece, i) => (
											<RenderPiece
												key={i}
												shape={DEFAULT_PIECE_TYPES[piece].shape}
												size={cellSize - 5}
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
													size={cellSize - 5}
												/>
											))}
							</Stack>
							<Text component='h2' my={0} fz={screenIsSmall ? 18 : 28}>
								Lines: {rowsCleared}
							</Text>
							<Text component='h2' my={0} fz={screenIsSmall ? 18 : 28}>
								Level: {level}
							</Text>
							<Text component='h2' my={0} fz={screenIsSmall ? 18 : 28}>
								Score: {score}
							</Text>
							<Button
								variant='white'
								size={screenIsSmall ? 'xs' : 'md'}
								onClick={start}
							>
								Start
							</Button>
							<Button
								variant='white'
								size={screenIsSmall ? 'xs' : 'md'}
								onClick={restart}
							>
								Restart
							</Button>
						</Stack>
					</GradientCard>
				</Group>
			</Container>
			{screenIsSmall && (
				<Stack p='sm' gap='xs' w='100%'>
					<Group gap='xs'>
						<Button flex={1} onMouseDown={() => moveHandler({ keyCode: 67 } as any)}>
							<TbInbox />
						</Button>
						<Button flex={1} onMouseDown={() => moveHandler({ keyCode: 38 } as any)}>
							<TbRotateClockwise />
						</Button>
					</Group>
					<Group gap='xs'>
						<Button flex={1} onMouseDown={() => moveHandler({ keyCode: 37 } as any)}>
							<TbArrowLeft />
						</Button>
						<Button flex={1} onMouseDown={() => moveHandler({ keyCode: 39 } as any)}>
							<TbArrowRight />
						</Button>
					</Group>
					<Group gap='xs'>
						<Button flex={1}>
							<TbArrowDown onMouseDown={() => moveHandler({ keyCode: 40 } as any)} />
						</Button>
						<Button flex={1}>
							<TbArrowDownBar
								onMouseDown={() => moveHandler({ keyCode: 32 } as any)}
							/>
						</Button>
					</Group>
				</Stack>
			)}
			{!screenIsSmall && (
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
			)}
		</Center>
	);
};
