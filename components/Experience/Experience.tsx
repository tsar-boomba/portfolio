import {
	createStyles,
	Container,
	Text,
	useMantineTheme,
	Timeline,
	TimelineItem,
	Group,
} from '@mantine/core';
import { myExperiences } from './myExperiences';
import { ExperienceCard } from './ExperienceCard';

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
}));

export const Experience = () => {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	return (
		<div id='skills' className={classes.wrapper}>
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
					Experience
				</Text>
				<Group position='center' mt={24}>
					<Timeline active={1} reverseActive>
						{myExperiences.map((exp, i) => (
							<TimelineItem key={i} lineVariant={exp.future ? 'dashed' : undefined}>
								<ExperienceCard {...exp} />
							</TimelineItem>
						))}
					</Timeline>
				</Group>
			</Container>
		</div>
	);
};
