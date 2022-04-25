import { createStyles, Container, Text, Group, useMantineTheme } from '@mantine/core';
import { mySkills } from './mySkills';
import SkillCard from './SkillCard';

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
			paddingBottom: 80,
			paddingTop: 80,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 56,
		fontWeight: 900,
		lineHeight: 1.1,
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
		marginTop: theme.spacing.xl * 2,

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

const Skills = () => {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	return (
		<div id='skills' className={classes.wrapper}>
			<Container size={700} className={classes.inner}>
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
					Skills
				</Text>
				<Group align='start' position='center' sx={{ marginTop: 24 }}>
					{mySkills.map((skill, i) => (
						<SkillCard key={i} {...skill} />
					))}
				</Group>
			</Container>
		</div>
	);
};

export default Skills;
