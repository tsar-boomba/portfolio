import { Anchor, Text } from '@mantine/core';
import {
	SiAmazonaws,
	SiMaterialui,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiStyledcomponents,
	SiTypescript,
	SiVercel,
	SiWebassembly,
} from 'react-icons/si';
import { ProjectCardProps } from './ProjectCard';
import scoutingImg from '@/public/scouting/stand-form.png';
import imgConvert from '@/public/img-convert/example.gif';

const githubUrl = (repo: string, owner = 'tsar-boomba') => `https://github.com/${owner}/${repo}`;

export const myProjects: ProjectCardProps[] = [
	{
		title: 'Yeti Scouting',
		mainTech: 'React',
		repo: githubUrl('2022-scouting-real', 'Yeti-Robotics'),
		deployed: 'https://scouting.yetirobotics.org',
		images: [scoutingImg],
		description: (
			<Text size='sm' mt='sm'>
				This site was created for my robotics team. We use it while at competitions to
				collect data on others team for when teams are selected. Users can scout matches,
				scout team pits and submit images, browse submitted form, bet on matches at the
				competition, and view their scouting schedule. To complement this site, I also made
				a discord bot with Node.js to remind people when they are scouting, which is also in
				the repository. It uses Next.js API Routes for the backend and MongoDB for the
				database, which the bot also draws upon as a data source.
			</Text>
		),
		technologies: [
			{
				icon: <SiReact size={16} />,
				name: 'React',
			},
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiMaterialui size={16} />,
				name: 'MUI',
			},
			{
				icon: <SiMongodb size={16} />,
				name: 'MongoDB',
			},
			{
				icon: '💅',
				name: 'Emotion',
			},
			{
				icon: <SiNodedotjs size={16} />,
				name: 'Node.js',
			},
			{
				icon: <SiVercel size={16} />,
				name: 'Vercel',
			},
		],
	},
	{
		title: 'Amogus Image Converter',
		mainTech: 'TypeScript',
		repo: githubUrl('amogus-image-converter'),
		deployed: 'https://img-convert.igamble.dev',
		images: [imgConvert],
		description: (
			<Text size='sm' mt='sm'>
				First of all, I would like to dedicate this site to my good friend,{' '}
				<Anchor
					size='sm'
					target='_blank'
					rel='noopener noreferrer'
					href='https://github.com/hmagan'
				>
					Hank Magan
				</Anchor>
				, who inspired me to make this after I saw his success in python. I wanted to bring
				the ability to convert images to amoguses to every device that can run a browser. I
				learned a lot about browser APIs and pushed what I thought I could do in a browser
				to its limits. Above is an example of a result of using the converter.
			</Text>
		),
		technologies: [
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiWebassembly size={16} />,
				name: 'WebAssembly',
			},
			{
				icon: <SiReact size={16} />,
				name: 'React',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
		],
	},
	{
		title: 'PUDO',
		mainTech: 'React',
		description: (
			<Text size='sm' mt='sm'>
				Sadly, I cannot share pictures or the source code for this application because I
				have business plans for it in the future. It is an application I made for a use by
				truck brokerage, I was paid for it, but still own the source code, and it is my
				second largest application after Yeti Scouting. Brokerages basically connect
				truckers with people who are looking to have something moved. This app helps keeps
				track of customers, truckers, loads, and employee progress on closing loads. I
				deployed the frontend, backend, and database on AWS using Docker and used Nginx to
				have both servers running in one container.
			</Text>
		),
		technologies: [
			{
				icon: <SiReact size={16} />,
				name: 'React',
			},
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiStyledcomponents size={16} />,
				name: 'Styled Components',
			},
			{
				icon: <SiNodedotjs size={16} />,
				name: 'Node.js',
			},
			{
				icon: <SiNestjs size={16} />,
				name: 'Nest.js',
			},
			{
				icon: <SiPostgresql size={16} />,
				name: 'PostgreSQL',
			},
			{
				icon: <SiAmazonaws size={16} />,
				name: 'AWS',
			},
			{
				icon: <SiNginx size={16} />,
				name: 'Nginx',
			},
		],
	},
];
