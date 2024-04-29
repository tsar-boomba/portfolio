import { ActionIcon, Card, Collapse, Group, Stack, Text, Title, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import { TbArrowUp, TbInfoCircle } from 'react-icons/tb';

export type Experience = {
	name: string;
	position: string;
	timeRange: string;
	location: string;
	description?: ReactNode;
	icon: ReactNode;
	future?: boolean;
};

export const ExperienceCard = ({
	name,
	description,
	location,
	icon,
	position,
	timeRange,
}: Experience) => {
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<Card maw={308.89} withBorder shadow='md'>
			<Group wrap='nowrap' align='start'>
				<Stack lh='1' p={rem(4)}>
					{icon}
					{description && (
						<ActionIcon variant='light'>
							{!opened ? (
								<TbInfoCircle size={20} onClick={toggle} />
							) : (
								<TbArrowUp size={20} onClick={toggle} />
							)}
						</ActionIcon>
					)}
				</Stack>
				<Stack gap={rem(4)}>
					<div>
						<Title order={2}>{name}</Title>
						<Text fw={800}>{position}</Text>
						<Text>{location}</Text>
						<Text c='dimmed'>{timeRange}</Text>
					</div>
				</Stack>
			</Group>
			<Collapse in={opened}>
				<div>{description}</div>
			</Collapse>
		</Card>
	);
};
