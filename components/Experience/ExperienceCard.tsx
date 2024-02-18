import { Box, Card, Group, Paper, Stack, Text, Title, rem } from '@mantine/core';
import { ReactNode } from 'react';

export type Experience = {
	name: string;
	position: string;
	timeRange: string;
	location: string;
	description: ReactNode;
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
	return (
		<Card miw={240} withBorder shadow='md'>
			<Group noWrap align='start'>
				<Paper lh='1' p={rem(4)}>
					{icon}
				</Paper>
				<Stack spacing={rem(4)}>
					<div>
						<Title order={2}>{name}</Title>
						<Text fw={800}>{position}</Text>
						<Text>{location}</Text>
						<Text color='dimmed'>{timeRange}</Text>
					</div>
					<Box maw={300}>{description}</Box>
				</Stack>
			</Group>
		</Card>
	);
};
