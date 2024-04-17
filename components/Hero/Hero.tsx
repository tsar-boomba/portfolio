import { Container, Text, useMantineTheme, Button, Stack, rem } from '@mantine/core';
import { control, description, inner, title, wrapper } from './Hero.css';

const Hero = () => {
	const theme = useMantineTheme();

	return (
		<div id='hero' className={wrapper}>
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
					<Text className={description} c='dimmed'>
						Full-stack developer with real-world project experience.
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
