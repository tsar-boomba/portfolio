import { createStyles, Container, Text, useMantineTheme, Button, Stack, rem } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
	},

	inner: {
		position: 'relative',
		paddingTop: 220,
		paddingBottom: 120,

		[BREAKPOINT]: {
			paddingBottom: 40,
			paddingTop: 80,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 62,
		fontWeight: 900,
		lineHeight: 1.1,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[BREAKPOINT]: {
			fontSize: 42,
			lineHeight: 1.2,
		},
	},

	description: {
		textAlign: 'center',
		marginTop: theme.spacing.xl,
		fontSize: 24,

		[BREAKPOINT]: {
			fontSize: 18,
		},
	},

	controls: {
		marginTop: `calc(${theme.spacing.xl} * 2)`,

		[BREAKPOINT]: {
			marginTop: theme.spacing.xl,
		},
	},

	control: {
		paddingLeft: 38,
		paddingRight: 38,

		[BREAKPOINT]: {
			fontSize: rem(20),
			paddingLeft: 18,
			paddingRight: 18,
		},
	},
}));

const Hero = () => {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	return (
		<div id='hero' className={classes.wrapper}>
			<Container size={700} className={classes.inner}>
				<Stack align='center' justify='center'>
					<Text
						component='h1'
						variant='gradient'
						className={classes.title}
						gradient={{
							from: theme.colors[theme.primaryColor][8],
							to: theme.colors[theme.primaryColor][5],
							deg: 75,
						}}
						align='center'
					>
						Isaiah Gamble
					</Text>
					<Text className={classes.description} color='dimmed'>
						Full-stack developer with real-world project experience.
					</Text>
					<Button
						component='a'
						className={classes.control}
						size='xl'
						fz={rem(24)}
						target='_blank'
						href='https://docs.google.com/gview?url=https://docs.google.com/document/d/1WAgMu51cO2KIKjmv9Z4uf-WnF_XtYkld/export?format=pdf'
					>
						Resume
					</Button>
				</Stack>
			</Container>
		</div>
	);
};

export default Hero;
