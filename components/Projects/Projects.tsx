import { Container, Text, Group, useMantineTheme } from '@mantine/core';
import { myProjects } from './myProjects';
import ProjectCard from './ProjectCard';
import { inner, oddWrapper, title } from '../Section.css';

const Projects = () => {
	const theme = useMantineTheme();

	return (
		<div id='projects' className={oddWrapper}>
			<Container size={1600} className={inner}>
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
					Projects
				</Text>
				<Group align='start' justify='center' style={{ marginTop: 24 }}>
					{myProjects.map((project, i) => (
						<ProjectCard key={i} {...project} />
					))}
				</Group>
			</Container>
		</div>
	);
};

export default Projects;
