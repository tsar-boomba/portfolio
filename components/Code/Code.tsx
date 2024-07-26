import useSWRImmutable from 'swr/immutable';
import { GITHUB_FUNCTION_URL } from '.';
import { fetcher } from '@/utils/fetcher';
import { Language } from './types';
import {
	Anchor,
	Box,
	Button,
	Card,
	Center,
	Group,
	Loader,
	RingProgress,
	Stack,
	Text,
	Title,
	Transition,
	useMantineTheme,
} from '@mantine/core';
import { lines } from './Code.css';
import { useIntersection } from '@mantine/hooks';
import { useState } from 'react';
import {
	c,
	cmake,
	cpp,
	css,
	docker,
	html,
	java,
	javascript,
	markdown,
	pythonBlue,
	rust,
	scss,
	svelte,
	toml,
	typescript,
	yaml,
} from '@/utils/brandColors';
import { openModal } from '@mantine/modals';

const NUM_TOP_LANGS = 7;

const nameToColor = (name: string) => {
	if (name === 'TypeScript') return typescript;
	if (name === 'Rust') return rust;
	if (name === 'Java') return java;
	if (name === 'Json') return '#ffff00';
	if (name === 'Toml') return toml;
	if (name === 'Cpp') return cpp;
	if (name === 'Css') return css;
	if (name === 'Python') return pythonBlue;
	if (name === 'JavaScript') return javascript;
	if (name === 'Sh') return '#00ff00';
	if (name === 'Dockerfile') return docker;
	if (name === 'C') return c;
	if (name === 'Svelte') return svelte;
	if (name === 'Html') return html;
	if (name === 'Yaml') return yaml;
	if (name === 'Sass') return scss;
	if (name === 'Markdown') return markdown;
	if (name === 'CMake') return cmake;
};

const isDarkColor = (color: string) => {
	const c = color.substring(1); // strip #
	const rgb = parseInt(c, 16); // convert rrggbb to decimal
	const r = (rgb >> 16) & 0xff; // extract red
	const g = (rgb >> 8) & 0xff; // extract green
	const b = (rgb >> 0) & 0xff; // extract blue

	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

	return luma < 128;
};

export const Code = () => {
	const { ref, entry } = useIntersection({
		threshold: 1,
		rootMargin: '64px',
	});
	const [hasTransitioned, setHasTransitioned] = useState(false);
	const theme = useMantineTheme();
	const { data: total, error } = useSWRImmutable<Language[]>(
		GITHUB_FUNCTION_URL + '/total',
		fetcher,
	);

	if (error) {
		console.error(error);
		return (
			<Center>
				Couldn't get the stats. sowwy bout that (<strong>{'>.<'}</strong>) Maybe try
				disabling adblock! ☝️🤓
			</Center>
		);
	}

	if (!total) {
		return (
			<Center>
				<Loader size='xl' variant='' />
			</Center>
		);
	}

	const totalLines = total.reduce((acc, lang) => acc + lang.code, 0);
	const thousandsOfLines = Math.round(totalLines / 1000).toFixed(0);

	const topLangs = total.slice(0, NUM_TOP_LANGS);
	const topLines = topLangs.reduce((acc, lang) => acc + lang.code, 0);

	return (
		<Stack maw={800} align='center' style={{ alignSelf: 'center' }}>
			<Group ref={ref} justify='center' align='center' gap={0}>
				<Stack align='flex-start' gap={0}>
					<Transition
						mounted={(entry?.isIntersecting ?? false) || hasTransitioned}
						transition='fade-down'
						keepMounted
						onEnter={() => setHasTransitioned(true)}
						duration={500}
					>
						{(style) => (
							<Text
								component='h1'
								variant='gradient'
								className={lines}
								style={style}
								gradient={{
									from: theme.colors[theme.primaryColor][9],
									to: theme.colors[theme.primaryColor][3],
									deg: 120,
								}}
							>
								{thousandsOfLines}
								<Box component='span' fz={48}>
									k
								</Box>
							</Text>
						)}
					</Transition>
					<Text>lines of code since June 2021</Text>
				</Stack>
				<Stack>
					<RingProgress
						size={240}
						thickness={16}
						label={
							<Stack align='center'>
								<Text fw={600}>Languages</Text>
								<Button
									size='xs'
									onClick={() =>
										openModal({
											title: 'Language Details',
											children: (
												<Stack>
													<Text>
														Collected{' '}
														<Anchor
															href='https://github.com/tsar-boomba/github-me'
															target='_blank'
														>
															with Rust
														</Anchor>{' '}
														using{' '}
														<Anchor
															target='_blank'
															href='https://github.com/XAMPPRocky/tokei?tab=readme-ov-file'
														>
															tokei
														</Anchor>
														. My program only counts repositories I am
														the owner of. So there is an adjustment for
														contributions outside of that.
													</Text>
													{total.map(
														({ name, code, blanks, comments }, i) => {
															const bgColor = nameToColor(name);
															const color =
																bgColor !== undefined
																	? isDarkColor(bgColor)
																		? 'white'
																		: 'black'
																	: undefined;
															return (
																<Card
																	key={name}
																	shadow='sm'
																	p='sm'
																	bg={bgColor}
																	c={color}
																>
																	<Stack gap={2}>
																		<Title order={5}>
																			{i + 1}. {name}
																		</Title>
																		<Text>
																			<strong>{code}</strong>{' '}
																			lines of code
																		</Text>
																		<Text>
																			<strong>
																				{blanks}
																			</strong>{' '}
																			blank lines
																		</Text>
																		<Text>
																			<strong>
																				{comments}
																			</strong>{' '}
																			lines of comments
																		</Text>
																	</Stack>
																</Card>
															);
														},
													)}
												</Stack>
											),
										})
									}
								>
									More Detail
								</Button>
							</Stack>
						}
						sections={topLangs.map(({ name, code }) => ({
							color: nameToColor(name) ?? 'gray',
							value: (code / topLines) * 100,
							tooltip: `${name} - ${(code / 1000).toFixed(1)}k lines`,
						}))}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};
