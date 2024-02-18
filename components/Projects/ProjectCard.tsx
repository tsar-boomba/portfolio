import React, { ReactNode } from 'react';
import {
	Card,
	Text,
	Group,
	Badge,
	Button,
	createStyles,
	Image,
	useMantineTheme,
} from '@mantine/core';
import { SiGithub } from 'react-icons/si';

const useStyles = createStyles((theme) => ({
	card: {
		maxWidth: 500,
	},

	section: {
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		paddingBottom: theme.spacing.md,
	},

	like: {
		color: theme.colors.red[6],
	},

	label: {
		textTransform: 'uppercase',
		fontSize: theme.fontSizes.xs,
		fontWeight: 700,
	},

	githubButton: {
		borderWidth: 2,
		flex: 1,
	},
}));

export interface ProjectCardProps {
	images?: string[];
	title: string;
	description: ReactNode;
	repo?: string;
	mainTech?: string;
	deployed?: string;
	technologies: {
		icon: ReactNode;
		name: string;
	}[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	images,
	title,
	description,
	technologies,
	repo,
	mainTech,
	deployed,
}) => {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	const builtWith = technologies.map((tech) => (
		<Badge
			color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
			size='lg'
			sx={{
				'span:first-of-type': { lineHeight: 0 },
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
			}}
			key={tech.name}
			leftSection={tech.icon}
		>
			{tech.name}
		</Badge>
	));

	return (
		<Card withBorder shadow='sm' p='md' className={classes.card}>
			{images && (
				<Card.Section>
					<Image src={images[0]} alt={title} />
				</Card.Section>
			)}

			<Card.Section className={classes.section} style={{ paddingTop: 16 }}>
				<Group position='apart'>
					<Text size='lg' weight={500}>
						{title}
					</Text>
					{mainTech && <Badge size='sm'>{mainTech}</Badge>}
				</Group>

				{description}
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt='md' className={classes.label} color='dimmed'>
					Technologies:
				</Text>
				<Group spacing={7} mt={5}>
					{builtWith}
				</Group>
			</Card.Section>

			<Group mt='md'>
				{repo ? (
					<Button
						component='a'
						variant='outline'
						target='_blank'
						rel='noopener noreferrer'
						href={repo}
						className={classes.githubButton}
						leftIcon={<SiGithub size={24} />}
					>
						GitHub
					</Button>
				) : (
					<Button
						component='a'
						variant='outline'
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/tsar-boomba'
						className={classes.githubButton}
						leftIcon={<SiGithub size={24} />}
					>
						No/Private Repository
					</Button>
				)}
				{deployed && (
					<Button
						component='a'
						variant='gradient'
						target='_blank'
						rel='noopener noreferrer'
						gradient={{
							from: theme.colors[theme.primaryColor][7],
							to: theme.colors[theme.primaryColor][5],
						}}
						href={deployed}
						style={{ flex: 1 }}
					>
						Visit
					</Button>
				)}
			</Group>
		</Card>
	);
};

export default ProjectCard;
