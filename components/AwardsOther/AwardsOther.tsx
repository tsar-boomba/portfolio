import {
	createStyles,
	Container,
	Text,
	Group,
	useMantineTheme,
	Card,
	Title,
	Box,
} from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
	},

	inner: {
		position: 'relative',
		paddingTop: 100,
		paddingBottom: 100,

		[BREAKPOINT]: {
			paddingBottom: 40,
			paddingTop: 40,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 56,
		fontWeight: 900,
		lineHeight: 1.3,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[BREAKPOINT]: {
			fontSize: 36,
			lineHeight: 1.2,
		},
	},

	description: {
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
		height: 54,
		paddingLeft: 38,
		paddingRight: 38,

		[BREAKPOINT]: {
			height: 54,
			paddingLeft: 18,
			paddingRight: 18,
			flex: 1,
		},
	},

	githubControl: {
		borderWidth: 2,
		borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

		'&:hover': {
			backgroundColor: `${
				theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
			} !important`,
		},
	},
}));

export const AwardsOther = () => {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	return (
		<div id='contact' className={classes.wrapper}>
			<Container size={900} className={classes.inner}>
				<Text
					component='h1'
					variant='gradient'
					className={classes.title}
					gradient={{
						from: theme.colors[theme.primaryColor][7],
						to: theme.colors[theme.primaryColor][4],
						deg: 75,
					}}
					align='center'
				>
					Awards & Other
				</Text>
				<Group mt={24} align='center' position='center'>
					<Card miw={240} withBorder shadow='md'>
						<Title order={2}>Provost Scholar</Title>
						<Box component='ul' maw={300} m={0}>
							<li>
								A highly prestigious merit scholarship awarded to{' '}
								<strong>60</strong> out-of-state students, from a pool of thousands.
							</li>
						</Box>
					</Card>
					<Card miw={240} withBorder shadow='md'>
						<Title order={2}>Hacklytics 2024</Title>
						<Box component='ul' maw={300} m={0}>
							<li>
								Placed <strong>2nd</strong> in the sports track and{' '}
								<strong>3rd</strong> in the healthcare track
							</li>
							<li>Against over 190 other submissions.</li>
						</Box>
					</Card>
				</Group>
			</Container>
		</div>
	);
};