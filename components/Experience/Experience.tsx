import {
	Container,
	Text,
	useMantineTheme,
	Timeline,
	TimelineItem,
	Group,
	Stack,
} from '@mantine/core';
import { myExperiences } from './myExperiences';
import { ExperienceCard } from './ExperienceCard';
import { inner, oddWrapper, title } from '../Section.css';
import { Code } from '../Code';

export const Experience = () => {
	const theme = useMantineTheme();

	return (
		<div id='skills' className={oddWrapper}>
			<Container size={900} className={inner}>
				<Text
					component='h1'
					variant='gradient'
					className={title}
					gradient={{
						from: theme.colors[theme.primaryColor][7],
						to: theme.colors[theme.primaryColor][4],
						deg: 75,
					}}
				>
					Experience
				</Text>
				<Group justify='center' mt={24}>
					<Timeline
						active={
							myExperiences[0].future
								? myExperiences.length - 2
								: myExperiences.length - 1
						}
						reverseActive
					>
						{myExperiences.map((exp, i) => (
							<TimelineItem key={i} lineVariant={exp.future ? 'dashed' : undefined}>
								<ExperienceCard {...exp} />
							</TimelineItem>
						))}
					</Timeline>
				</Group>
				<Stack>
					<Text
						component='h2'
						variant='gradient'
						className={title}
						mt='md'
						style={{ fontSize: 48 }}
						gradient={{
							from: theme.colors[theme.primaryColor][7],
							to: theme.colors[theme.primaryColor][4],
							deg: 75,
						}}
					>
						Code Stats
					</Text>
					<Code />
				</Stack>
			</Container>
		</div>
	);
};
