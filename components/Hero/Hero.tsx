import { Container, Text, useMantineTheme, Button, Stack, rem, Group } from '@mantine/core';
import { aurora, background, control, description, inner, title, wrapper } from './Hero.css';

const AuroraSegment = ({
	pos,
	segments,
	width,
}: {
	pos: number;
	segments: number;
	width: string | number;
}) => {
	const progress = pos / segments;
	return (
		<div
			style={{
				height: '100%',
				width,
				background: `linear-gradient(180deg, rgba(63,94,251,0.5) 0%, rgba(171,82,254,0.5) ${9 + 10 * progress}%, rgba(1,190,255,0.5) ${18 + 10 * (progress * 2)}%, rgba(3,249,240,0.5) ${28 + 20 * progress}%, rgba(70,252,176,0.4) ${47 + 40 * progress}%, rgba(70,252,176,0.05) ${80 + 20 * progress}%)`,
			}}
		></div>
	);
};

const Aurora = ({ segments = 100 }: { segments?: number }) => {
	return (
		<Group gap={0} align='flex-start' className={aurora}>
			{Array.from(Array(segments).keys()).map((pos) => {
				return (
					<AuroraSegment
						key={pos}
						pos={pos}
						segments={segments}
						width={`${100 / segments}%`}
					/>
				);
			})}
		</Group>
	);
};

const Hero = () => {
	const theme = useMantineTheme();

	return (
		<div id='hero' className={wrapper}>
			<div className={background}>
				<Aurora />
			</div>
			<Container size={700} className={inner}>
				<Stack align='center' justify='center'>
					<Text
						component='h1'
						variant='gradient'
						className={title}
						gradient={{
							from: theme.colors[theme.primaryColor][8],
							to: theme.colors[theme.primaryColor][5],
							deg: 75,
						}}
					>
						Isaiah Gamble
					</Text>
					<Text className={description}>
						<span>Full-stack, Embedded Engineer who</span>
						<span>🧡</span>
						<span>Rust</span>
					</Text>
					<Button
						component='a'
						className={control}
						size='xl'
						fz={rem(24)}
						target='_blank'
						href={'https://tsar-boomba.github.io/resume/resume.pdf'}
					>
						Resume
					</Button>
				</Stack>
			</Container>
		</div>
	);
};

export default Hero;
