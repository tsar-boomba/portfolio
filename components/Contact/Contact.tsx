import { createStyles, Container, Text, Group, useMantineTheme } from '@mantine/core';
import { SiDiscord, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import ContactCard from './ContactCard';
import { TbFile } from 'react-icons/tb';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
		backgroundColor: theme.colorScheme === 'dark' ? undefined : theme.colors.gray[0],
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

const Contact = () => {
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
					Contact
				</Text>
				<Group align='start' position='center' sx={{ marginTop: 24 }}>
					<ContactCard
						icon={<SiGithub size={20} />}
						href='https://github.com/tsar-boomba'
					>
						<Text component='h1' align='center'>
							GitHub
						</Text>
					</ContactCard>
					<ContactCard icon={<SiGmail size={20} />} href='mailto:itg.2048@gmail.com'>
						<Text component='h1' align='center'>
							E-Mail
						</Text>
					</ContactCard>
					<ContactCard icon={<SiDiscord size={20} />} text='Ibomb#0221'>
						<Text component='h1' align='center'>
							Discord
						</Text>
					</ContactCard>
					<ContactCard
						icon={<SiLinkedin size={20} />}
						href='https://www.linkedin.com/in/igamble/'
					>
						<Text component='h1' align='center'>
							Linkedin
						</Text>
					</ContactCard>
					<ContactCard
						icon={<TbFile size={20} />}
						href='https://docs.google.com/gview?url=https://docs.google.com/document/d/1WAgMu51cO2KIKjmv9Z4uf-WnF_XtYkld/export?format=pdf'
					>
						<Text component='h1' align='center'>
							Resume
						</Text>
					</ContactCard>
				</Group>
			</Container>
		</div>
	);
};

export default Contact;
