import { Text } from '@mantine/core';
import { Experience } from './ExperienceCard';
import { SiMongodb } from 'react-icons/si';
import { mongodb } from '@/utils/brandColors';
import { TbFeather } from 'react-icons/tb';

export const myExperiences: Experience[] = [
	{
		name: 'MongoDB',
		position: 'Software Engineering Intern',
		timeRange: 'June 2024 - August 2024',
		location: 'New York, NY',
		icon: <SiMongodb size={28} color={mongodb} />,
		description: <Text></Text>,
		future: true,
	},
	{
		name: 'SPI',
		position: 'Software Engineering Intern',
		timeRange: 'June 2023 - Present',
		location: 'Fort Mill, SC / Remote',
		icon: <img src='/spi-logo.png' alt='SPI Logo' width={28} height={28} />,
		description: <Text></Text>,
	},
	{
		name: 'Freelance',
		position: 'Freelancer',
		timeRange: 'December 2021 - July 2022',
		location: 'Remote',
		icon: <TbFeather size={28} />,
		description: <Text></Text>,
	},
];
