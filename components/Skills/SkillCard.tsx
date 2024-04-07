import { Box, Collapse, Group, Paper } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { ReactNode } from 'react';
import { card, descriptionClass, iconClass } from './SkillCard.css';

export interface SkillCardProps {
	icon: ReactNode;
	name: ReactNode;
	description: ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, description }) => {
	const [opened] = useToggle([false, true]);

	return (
		<Paper withBorder shadow='xs' className={card}>
			<Group justify='space-apart' align='center'>
				<Group gap='xs'>
					<Box className={iconClass}>{icon}</Box>
					<div>{name}</div>
				</Group>
			</Group>
			<Collapse in={opened}>
				<Box className={descriptionClass}>{description}</Box>
			</Collapse>
		</Paper>
	);
};

export default SkillCard;
