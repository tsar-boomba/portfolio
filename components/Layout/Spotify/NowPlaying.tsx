import {
	ActionIcon,
	Affix,
	Anchor,
	Box,
	Card,
	Group,
	Image,
	Popover,
	Progress,
	Stack,
	Text,
	ThemeIcon,
	Title,
	Tooltip,
	Transition,
	rem,
} from '@mantine/core';
import useSWR, { mutate } from 'swr';
import { FUNCTION_URL } from '.';
import { fetcher } from '@/utils/fetcher';
import { Playing } from './types';
import { spotify } from '@/utils/brandColors';
import { useEffect, useRef, useState } from 'react';
import { useInterval, useTimeout } from '@mantine/hooks';
import {
	TbArrowLoopRight,
	TbArrowLoopRight2,
	TbArrowsShuffle,
	TbCar,
	TbDeviceLaptop,
	TbDeviceMobile,
	TbDeviceSpeaker,
	TbDeviceTablet,
	TbPhone,
	TbPlaylist,
	TbQuestionMark,
	TbRepeat,
	TbRepeatOnce,
} from 'react-icons/tb';

export const NowPlaying = () => {
	const [progressSecs, setProgressSecs] = useState(0);
	const currentPlaying = useRef<Playing | null>(null);
	const triedRefresh = useRef(false);
	const [showPopup, setShowPopup] = useState(true);
	const popupTimeout = useTimeout(
		() => {
			setShowPopup(false);
		},
		5000,
		{ autoInvoke: false },
	);

	const progressInterval = useInterval(() => {
		setProgressSecs((prev) => {
			if (
				!triedRefresh.current &&
				currentPlaying.current &&
				prev >= currentPlaying.current.playing.duration
			) {
				// Song ended, check API for new song
				console.log('song ended locally');
				progressInterval.stop();
				triedRefresh.current = true;
				mutate(FUNCTION_URL + '/playing').then(() => {
					progressInterval.start();
				});
			}
			return prev + 0.5;
		});
	}, 500);

	const { data } = useSWR<Playing | null>(FUNCTION_URL + '/playing', fetcher, {
		refreshInterval: 10000,
		revalidateOnFocus: true,
		onSuccess: (newData) => {
			progressInterval.start();
			currentPlaying.current = newData;
			if (newData) {
				triedRefresh.current = false;
				setProgressSecs(newData.progressSecs);
			}
		},
	});

	useEffect(() => {
		if (data) {
			popupTimeout.start();
		}
	}, [data]);

	return (
		<Affix position={{ bottom: rem(20), right: rem(20) }}>
			<Transition transition='pop-bottom-right' mounted={!!data} duration={500}>
				{(styles) => (
					<>
						{data && (
							<Tooltip
								withinPortal
								withArrow
								opened={showPopup}
								openDelay={700}
								label='Isaiah is currently listening to...'
							>
								<Card
									style={{ ...styles }}
									maw={`calc(100vw - ${rem(40)})`}
									withBorder
									shadow='md'
									pos='relative'
									p={0}
								>
									<Box p='xs'>
										<Group spacing='xs' pb={rem(4)} noWrap>
											{/* <Anchor
												href={data.playing.url ?? undefined}
												target='_blank'
											>
												<Image
													height={rem(52)}
													width={rem(52)}
													src={data.playing.imageUrl ?? undefined}
													alt={`${data.playing.name} album cover`}
												/>
											</Anchor> */}
											<Stack spacing={0}>
												<Group noWrap>
													<Stack align='start' spacing={0}>
														<Anchor
															href={data.playing.url ?? undefined}
															target='_blank'
														>
															<Title
																order={5}
																style={{
																	textOverflow: 'ellipsis',
																	overflow: 'hidden',
																	whiteSpace: 'nowrap',
																}}
															>
																{data.playing.name}
															</Title>
														</Anchor>
														<span
															style={{
																whiteSpace: 'nowrap',
																overflow: 'hidden',
															}}
														>
															{data.playing.artists.map(
																(artist, i) => (
																	<span key={artist.name + i}>
																		<Anchor
																			href={
																				artist.url ??
																				undefined
																			}
																			target='_blank'
																			style={{
																				color: spotify,
																			}}
																		>
																			{artist.name}
																		</Anchor>
																		{i ===
																		data.playing.artists
																			.length -
																			1 ? (
																			<></>
																		) : (
																			<>, </>
																		)}
																	</span>
																),
															)}
														</span>
													</Stack>
													<div style={{ flexGrow: 1 }} />
													{data.context?.external_urls.spotify && (
														<Tooltip
															withinPortal
															withArrow
															label={
																data.context.type[0].toUpperCase() +
																data.context.type.slice(1)
															}
														>
															<ActionIcon
																component='a'
																href={
																	data.context.external_urls
																		.spotify
																}
																target='_blank'
															>
																<TbPlaylist size={16} />
															</ActionIcon>
														</Tooltip>
													)}
													{data.device.type !== 'Unknown' && (
														<Tooltip
															withinPortal
															withArrow
															label={data.device.name}
														>
															<div style={{ lineHeight: 1 }}>
																{data.device.type === 'Computer' ? (
																	<TbDeviceLaptop />
																) : data.device.type ===
																		'Smartphone' ||
																  data.device.type === 'Tablet' ? (
																	<TbDeviceMobile />
																) : data.device.type ===
																  'Automobile' ? (
																	<TbCar />
																) : data.device.type ===
																		'AudioDongle' ||
																  data.device.type === 'Speaker' ? (
																	<TbDeviceSpeaker />
																) : (
																	<TbQuestionMark />
																)}
															</div>
														</Tooltip>
													)}
												</Group>
											</Stack>
										</Group>
										<Group align='center'>
											<TbArrowsShuffle
												size={18}
												color={data.shuffled ? spotify : undefined}
											/>
											<div style={{ flexGrow: 1 }}>
												<Progress
													size='sm'
													styles={{
														bar: { backgroundColor: spotify },
													}}
													value={
														(progressSecs / data.playing.duration) * 100
													}
												/>
											</div>
											{data.repeat === 'track' ? (
												<TbRepeatOnce size={18} color={spotify} />
											) : (
												<TbRepeat
													size={18}
													color={
														data.repeat === 'context'
															? spotify
															: undefined
													}
												/>
											)}
										</Group>
									</Box>
								</Card>
							</Tooltip>
						)}
					</>
				)}
			</Transition>
		</Affix>
	);
};
