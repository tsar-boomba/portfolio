import {
	ActionIcon,
	Affix,
	Anchor,
	Card,
	Group,
	Image,
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
import { useRef, useState } from 'react';
import { useInterval } from '@mantine/hooks';
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

	const progressInterval = useInterval(() => {
		setProgressSecs((prev) => {
			if (currentPlaying.current && prev >= currentPlaying.current.playing.duration) {
				// Song ended, check API for new song
				console.log('song ended locally');
				progressInterval.stop();
				mutate(FUNCTION_URL + '/playing').then(() => {
					progressInterval.start();
				});
			}
			return prev + 0.5;
		});
	}, 500);

	const { data } = useSWR<Playing | null>(FUNCTION_URL + '/playing', fetcher, {
		refreshInterval: 10000,
		onSuccess: (newData) => {
			progressInterval.start();
			currentPlaying.current = newData;
			if (newData) {
				console.log(newData?.playing.name);
				setProgressSecs(newData.progressSecs);
			}
		},
	});

	return (
		<Affix position={{ bottom: rem(20), right: rem(20) }}>
			<Transition transition='pop-bottom-right' mounted={!!data}>
				{(styles) => (
					<>
						{data && (
							<Card maw={`calc(100vw - ${rem(40)})`} withBorder shadow='md' p='xs'>
								<Group spacing='xs' noWrap>
									<Text
										style={{
											writingMode: 'vertical-rl',
											transform: 'rotate(180deg)',
											textAlign: 'justify',
											fontWeight: 800,
										}}
										size={rem(10)}
									>
										Listening To
									</Text>

									<Stack miw={250} spacing={0} style={{ ...styles, flexGrow: 1 }}>
										<Group noWrap>
											<Stack align='start' spacing={0}>
												<Anchor
													href={data.playing.url ?? undefined}
													target='_blank'
												>
													<Title
														order={4}
														style={{
															textOverflow: 'ellipsis',
															overflow: 'hidden',
															whiteSpace: 'nowrap',
														}}
													>
														{data.playing.name}
													</Title>
												</Anchor>
												<span>
													{data.playing.artists.map((artist, i) => (
														<span key={artist.name + i}>
															<Anchor
																href={artist.url ?? undefined}
																target='_blank'
																style={{
																	color: spotify,
																}}
															>
																{artist.name}
															</Anchor>
															{i ===
															data.playing.artists.length - 1 ? (
																<></>
															) : (
																<>, </>
															)}
														</span>
													))}
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
														href={data.context.external_urls.spotify}
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
														) : data.device.type === 'Smartphone' ||
														  data.device.type === 'Tablet' ? (
															<TbDeviceMobile />
														) : data.device.type === 'Automobile' ? (
															<TbCar />
														) : data.device.type === 'AudioDongle' ||
														  data.device.type === 'Speaker' ? (
															<TbDeviceSpeaker />
														) : (
															<TbQuestionMark />
														)}
													</div>
												</Tooltip>
											)}
										</Group>
										<Group align='center'>
											<TbArrowsShuffle
												size={18}
												color={data.shuffled ? spotify : undefined}
											/>
											<div style={{ flexGrow: 1 }}>
												<Progress
													size='sm'
													styles={{ bar: { backgroundColor: spotify } }}
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
									</Stack>
								</Group>
							</Card>
						)}
					</>
				)}
			</Transition>
		</Affix>
	);
};
