import { Anchor, Code, List } from '@mantine/core';
import { Experience } from './ExperienceCard';
import { SiMongodb, SiNvidia } from 'react-icons/si';
import { mongodb, nvidia } from '@/utils/brandColors';
import { TbFeather } from 'react-icons/tb';
import { ReactNode } from 'react';

const Item = ({ children }: { children?: ReactNode }) => (
	<List.Item styles={{ itemWrapper: { display: 'inline' } }}>{children}</List.Item>
);

export const myExperiences: readonly Experience[] = [
	{
		name: 'Verkada',
		future: true,
		position: 'Senior Software Engineer Intern',
		timeRange: 'June 2026 - August 2026',
		location: 'San Mateo, CA',
		icon: <img src='/verkada.png' alt='Verkada Logo' width={28} height={28} />,
		link: 'https://verkada.com',
	},
	{
		name: 'Verkada',
		position: 'Software Engineer Intern',
		timeRange: 'June 2025 - August 2025',
		location: 'San Mateo, CA',
		icon: <img src='/verkada.png' alt='Verkada Logo' width={28} height={28} />,
		link: 'https://verkada.com',
		description: (
			<List>
				<Item>
					This time around, I worked on preparing the{' '}
					<Anchor href='https://www.verkada.com/blog/introducing-operator-view/'>
						Operator View
					</Anchor>{' '}
					feature for release using TypeScript, React, and Go.
				</Item>
				<Item>
					Added rich text support through markdown for ticket comments, and Standard
					Operating Procedures.
				</Item>
				<Item>
					Implemented tag creation, searching, and attachment to tickets on the frontend
				</Item>
				<Item>
					Designed and implemented asynchronous CSV export of ticket and their statuses.
				</Item>
				<Item>Designed image upload for ticket comments.</Item>
			</List>
		),
	},
	{
		name: 'NVIDIA',
		position: 'Embedded Software Engineer Intern',
		timeRange: 'May 2025',
		location: 'Santa Clara, CA',
		icon: <SiNvidia size={28} color={nvidia} />,
		link: 'https://www.nvidia.com/',
		description: (
			<List>
				<Item>
					Worked on the JetPack SDK team responsible for maintaining NVIDIA's Ubuntu-based
					Linux distribution
				</Item>
				<Item>
					Added a feature to the Python GPIO library that ensures the correct
					configuration of pin mux registers through the <Code>/dev/mem</Code> node
				</Item>
				<Item>
					I terminated my internship early due to the lack of intellectual and technical
					stimulation
				</Item>
			</List>
		),
	},
	{
		name: 'Verkada',
		position: 'Software Engineer Intern',
		timeRange: 'January 2025 - April 2025',
		location: 'San Mateo, CA',
		icon: <img src='/verkada.png' alt='Verkada Logo' width={28} height={28} />,
		link: 'https://verkada.com',
		description: (
			<List>
				<Item>
					Developed features using TypeScript and Go throughout the entire tech stack,
					from frontend to firmware
				</Item>
				<Item>
					Used React to implement core features on the frontend of an in-development
					product
				</Item>
				<Item>
					Improved developer experience by implementing caching where possible speeding up
					build and start up times
				</Item>
			</List>
		),
	},
	{
		name: 'Hack4Impact GT: Bits of Good',
		position: 'Developer',
		timeRange: 'August 2024 - Present',
		location: 'Atlanta, GA',
		icon: <img src='/bog.png' alt='SPI Logo' width={28} height={28} />,
		link: 'https://bitsofgood.org',
		description: (
			<List>
				<Item>
					Working on an Agile team to create an application for Atlanta 501(c)(3)
					Motherhood Beyond Bars
				</Item>
				<Item>
					Translating Figma designs from an experienced designer into fully functional
					React components
				</Item>
				<Item>
					Creating backend functionality using Node.js, and employed Server-Side Rendering
					for optimal user experience
				</Item>
			</List>
		),
	},
	{
		name: 'MongoDB',
		position: 'Software Engineer Intern',
		timeRange: 'June 2024 - August 2024',
		location: 'New York, NY',
		icon: <SiMongodb size={28} color={mongodb} />,
		link: 'https://www.mongodb.com/',
		description: (
			<List>
				<Item>
					Worked with the Cloud Payments Team to ensure the consistency of payment data by
					automating Jira issue creation for job failures to improve engineer response
					times using Java
				</Item>
				<Item>
					Developed API endpoint to run specific jobs, expediting post-fix testing and
					automating Jira issue resolution
				</Item>
				<Item>
					Wrote Unit Tests, Integration Tests, and Third-Party Tests that interface with
					Jira with JUnit
				</Item>
			</List>
		),
	},
	{
		name: 'SPI',
		position: 'Software Engineering Intern',
		timeRange: 'June 2023 - June 2025',
		location: 'Fort Mill, SC / Remote',
		icon: <img src='/spi-logo.png' alt='SPI Logo' width={28} height={28} />,
		link: 'https://sp-i4.com',
		description: (
			<List>
				<Item>
					Created two internal tools with Rust, React.js, and TypeScript which increased
					productivity by reverse engineering proprietary solutions for our workflow
				</Item>
				<Item>
					Programmed a microcontroller, using C and Rust, which uses Modbus to extract
					data from a monitoring device
				</Item>
				<Item>
					Interfaced with a 4G LTE modem to send collected data to a dashbaord for
					customer viewing
				</Item>
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
				<Item>
					Architected and implemented full-stack web applications using Node.js, React.js,
					Docker, and AWS
				</Item>
				<Item>
					Created a web application for a trucking company using React.js, Next.js,
					Nest.js, Nginx, and PostgreSQL. Stored information for thousands of complex
					loads and is critical to their operations
				</Item>
			</List>
		),
	},
] as const;
