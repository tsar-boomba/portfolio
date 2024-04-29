import React, { ReactNode } from 'react';
import { Card, Group, Badge, Button, Image, useMantineTheme, Title } from '@mantine/core';
import { SiGithub } from 'react-icons/si';
import { badge, card, githubButton, label, section } from './ProjectCard.css';
import { TbPhoto } from 'react-icons/tb';
import { openModal } from '@mantine/modals';

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
	deployed,
}) => {
	const theme = useMantineTheme();

	const builtWith = technologies.map((tech) => (
		<Badge
			variant='default'
			size='lg'
			className={badge}
			key={tech.name}
			leftSection={tech.icon}
		>
			{tech.name}
		</Badge>
	));

	return (
		<Card withBorder shadow='sm' p='md' className={card}>
			<Card.Section className={section} pt='md'>
				<Group wrap='nowrap'>
					<Title order={1} size='xl' fw={600}>
						{title}
					</Title>
					{images && (
						<Group justify='flex-end' flex={1}>
							<Button
								variant='gradient'
								size='xs'
								leftSection={<TbPhoto size={16} strokeWidth={2.2} />}
								gradient={{
									from: theme.colors[theme.primaryColor][7],
									to: theme.colors[theme.primaryColor][5],
								}}
								onClick={() =>
									openModal({
										title: `${title} Gallery`,
										size: 'auto',
										children: <Image src={images[0]} alt={`${title} demo`} />,
									})
								}
							>
								Gallery
							</Button>
						</Group>
					)}
				</Group>

				{description}
			</Card.Section>

			<Card.Section className={section}>
				<Title order={2} size='xs' mt='md' className={label} c='dimmed'>
					Technologies:
				</Title>
				<Group gap={7} mt={5}>
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
						className={githubButton}
						leftSection={<SiGithub size={20} />}
					>
						Repository
					</Button>
				) : (
					<Button
						component='a'
						variant='outline'
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/tsar-boomba'
						className={githubButton}
						leftSection={<SiGithub size={20} />}
						disabled
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
						flex={1}
					>
						Visit
					</Button>
				)}
			</Group>
		</Card>
	);
};

export default ProjectCard;
