import { Container, Text, useMantineTheme, Timeline, TimelineItem, Group } from '@mantine/core';
import { myExperiences } from './myExperiences';
import { ExperienceCard } from './ExperienceCard';
import { inner, oddWrapper, title } from '../Section.css';

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
