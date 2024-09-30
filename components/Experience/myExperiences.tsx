import { List } from '@mantine/core';
import { Experience } from './ExperienceCard';
import { SiMongodb } from 'react-icons/si';
import { mongodb } from '@/utils/brandColors';
import { TbFeather } from 'react-icons/tb';

export const myExperiences: Experience[] = [
	{
		name: 'Hack4Impact GT: Bits of Good',
		position: 'Developer',
		timeRange: 'August 2024 - Present',
		location: 'Atlanta, GA',
		icon: <img src='/bog.png' alt='SPI Logo' width={28} height={28} />,
		link: 'https://bitsofgood.org',
		description: (
			<List>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Working on an Agile team to create an application for Atlanta 501(c)(3)
					Motherhood Beyond Bars
				</List.Item>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Translating Figma designs from an experienced designer into fully functional
					React components
				</List.Item>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Creating backend functionality using Node.js, and employed Server-Side Rendering
					for optimal user experience
				</List.Item>
			</List>
		),
	},
	{
		name: 'MongoDB',
		position: 'Software Engineering Intern',
		timeRange: 'June 2024 - August 2024',
		location: 'New York, NY',
		icon: <SiMongodb size={28} color={mongodb} />,
		link: 'https://www.mongodb.com/',
		description: (
			<List>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Worked with the Cloud Payments Team to ensure the consistency of payment data by
					automating Jira issue creation for job failures to improve engineer response
					times using Java
				</List.Item>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Developed API endpoint to run specific jobs, expediting post-fix testing and
					automating Jira issue resolution
				</List.Item>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Wrote Unit Tests, Integration Tests, and Third-Party Tests that interface with
					Jira with JUnit
				</List.Item>
			</List>
		),
	},
	{
		name: 'SPI',
		position: 'Software Engineering Intern',
		timeRange: 'June 2023 - Present',
		location: 'Fort Mill, SC / Remote',
		icon: <img src='/spi-logo.png' alt='SPI Logo' width={28} height={28} />,
		link: 'https://sp-i4.com',
		description: (
			<List>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Created two internal tools with Rust, React.js, and TypeScript which increased
					productivity by reverse engineering proprietary solutions for our workflow
				</List.Item>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Programmed a microcontroller, using C and Rust, which uses Modbus to extract
					data from a monitoring device
				</List.Item>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Interfaced with a 4G LTE modem to send collected data to a dashbaord for
					customer viewing
				</List.Item>
			</List>
		),
	},
	{
		name: 'Freelance',
		position: 'Freelancer',
		timeRange: 'December 2021 - July 2022',
		location: 'Remote',
		icon: <TbFeather size={28} />,
		description: (
			<List>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Architected and implemented full-stack web applications using Node.js, React.js,
					Docker, and AWS
				</List.Item>
				<List.Item styles={{ itemWrapper: { display: 'inline' } }}>
					Created a web application for a trucking company using React.js, Next.js,
					Nest.js, Nginx, and PostgreSQL. Stored information for thousands of complex
					loads and is critical to their operations
				</List.Item>
			</List>
		),
	},
];
