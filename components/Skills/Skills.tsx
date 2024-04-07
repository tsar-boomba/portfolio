import { Container, Text, Group, useMantineTheme } from '@mantine/core';
import { mySkills } from './mySkills';
import SkillCard from './SkillCard';
import { evenWrapper, inner, title } from '../Section.css';

const Skills = () => {
	const theme = useMantineTheme();

	return (
		<div id='skills' className={evenWrapper}>
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
					ta='center'
				>
					Skills
				</Text>
				<Group align='start' justify='center' mt={24}>
					{mySkills.map((skill, i) => (
						<SkillCard key={i} {...skill} />
					))}
				</Group>
			</Container>
		</div>
	);
};

export default Skills;
