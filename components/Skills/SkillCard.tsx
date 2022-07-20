import { Box, Collapse, createStyles, Group, Paper } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { ReactNode } from 'react';
import { CgChevronLeft } from 'react-icons/cg';

export interface SkillCardProps {
	icon: ReactNode;
	name: ReactNode;
	description: ReactNode;
}

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
		width: 300,
	},

	name: {
		color: theme.colors[theme.primaryColor][6],
	},

	description: {
		padding: 8,
		maxWidth: 300,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
		}`,
	},

	icon: {
		padding: 8,
		margin: 8,
		borderRadius: theme.radius.sm,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
		lineHeight: 0,
		color: theme.colors[theme.primaryColor][6],
	},

	chevron: {
		margin: 8,
		transition: 'transform 0.2s ease',
		cursor: 'pointer',
		color: theme.colors[theme.primaryColor][6],
	},
}));

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, description }) => {
	const { classes } = useStyles();
	const [opened, toggleOpened] = useToggle([false, true]);

	return (
		<Paper withBorder shadow='xs' className={classes.card}>
			<Group position='apart' align='center'>
				<Group>
					<Box className={classes.icon}>{icon}</Box>{' '}
					<Box className={classes.name}>{name}</Box>
				</Group>
				<CgChevronLeft
					onClick={() => toggleOpened()}
					className={classes.chevron}
					size={30}
					style={{ transform: opened ? 'rotate(-90deg)' : undefined }}
				/>
			</Group>
			<Collapse in={opened}>
				<Box className={classes.description}>{description}</Box>
			</Collapse>
		</Paper>
	);
};

export default SkillCard;
