import { Anchor, Code, List, Text } from '@mantine/core';
import {
	SiAmazonaws,
	SiDocker,
	SiEspressif,
	SiGatsby,
	SiGithub,
	SiJest,
	SiLinux,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPostgresql,
	SiReact,
	SiRust,
	SiSass,
	SiTypescript,
	SiVercel,
} from 'react-icons/si';
import { TbTool } from 'react-icons/tb';
import {
	aws,
	docker,
	esprissif,
	gatsby,
	jest,
	mongodb,
	nodeJs,
	npm,
	postgres,
	react,
	rust,
	scss,
	typescript,
} from '../../utils/brandColors';
import { ProjectCardProps } from './ProjectCard';

const githubUrl = (repo: string, owner = 'tsar-boomba') => `https://github.com/${owner}/${repo}`;

export const myProjects: ProjectCardProps[] = [
	{
		title: 'ESP Spotify Display',
		mainTech: 'Rust',
		repo: githubUrl('esp-display'),
		images: ['/esp-display/demo.jpg'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					A small embedded project that shows what I'm listening to on Spotify by using{' '}
					<Anchor href='https://github.com/tsar-boomba/spotify-me' target='_blank'>
						my Spotify service
					</Anchor>
					.
				</Text>
				<List size='sm'>
					<List.Item>ESP32-S3 board, written in Rust</List.Item>
					<List.Item>Uses the SPI peripheral to communicate with the screen</List.Item>
					<List.Item>Uses ESP-IDF's HTTP/S client to connect with my server</List.Item>
					<List.Item>Uses WPA2(Personal / Enterprise) for Wifi authentication</List.Item>
					<List.Item>
						Uses FreeRTOS's tasks/threads to achieve non-blocking updates to UI
					</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiRust size={16} color={rust} />,
				name: 'Rust',
			},
			{
				icon: <SiEspressif size={16} color={esprissif} />,
				name: 'Espressif',
			},
			{
				icon: <TbTool size={16} />,
				name: 'Embedded',
			},
		],
	},
	{
		title: 'Oxide',
		mainTech: 'Rust',
		images: ['/oxide/picture.JPG'],
		repo: githubUrl('oxide'),
		description: (
			<>
				<Text size='sm' mt='sm'>
					Custom frontend for the Miyoo Mini family of tiny, powerful, and portable
					emulators.
				</Text>
				<List size='sm'>
					<List.Item>
						Custom Retro Arch frontend allows access to all RA emulators
					</List.Item>
					<List.Item>Optimized sleep mode & fast start-up</List.Item>
					<List.Item>Cross-compiling build pipeline with Docker</List.Item>
					<List.Item>
						Interacts with low-level Linux APIs such as ioctl and <Code>/dev</Code>
					</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiRust size={16} color={rust} />,
				name: 'Rust',
			},
			{
				icon: <SiLinux size={16} />,
				name: 'Linux',
			},
			{
				icon: <SiDocker size={16} color={docker} />,
				name: 'Docker',
			},
			{
				icon: <TbTool size={16} />,
				name: 'Embedded',
			},
		],
	},
	{
		title: 'Yeti Scouting',
		mainTech: 'React',
		repo: githubUrl('2022-scouting-real', 'Yeti-Robotics'),
		deployed: 'https://scouting.yetirobotics.org',
		images: ['/scouting/stand-form.png'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					An operation critical web application used by my robotics team to collect data
					at competitions.
				</Text>
				<List size='sm'>
					<List.Item>
						Used mongodb for data persistence and Node.js for the backend
					</List.Item>
					<List.Item>Custom authentication with JWTs and OAuth with discord</List.Item>
					<List.Item>Data visualization with graphs and charts</List.Item>
					<List.Item>Complimentary Discord bot made with Rust</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: <SiRust size={16} color={rust} />,
				name: 'Rust',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiMongodb size={16} color={mongodb} />,
				name: 'MongoDB',
			},
			{
				icon: '💅',
				name: 'Emotion',
			},
			{
				icon: <SiNodedotjs size={16} color={nodeJs} />,
				name: 'Node.js',
			},
			{
				icon: <SiVercel size={16} />,
				name: 'Vercel',
			},
		],
	},
	{
		title: 'Milky Web',
		mainTech: 'Rust',
		repo: githubUrl('central'),
		deployed: 'https://milkyweb.app',
		images: ['/milky-web/example.png'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					Milky Web is a MVP for a business idea I had in 2022. It was about providing
					easy access to web infrastructure for anyone.
				</Text>
				<List size='sm'>
					<List.Item>Robust authentication with JWT</List.Item>
					<List.Item>Subscriptions with Stripe</List.Item>
					<List.Item>Microservice architecture</List.Item>
					<List.Item>Deploy instances to AWS</List.Item>
					<List.Item>Provisions DNS records</List.Item>
					<List.Item>AWS Lambda to handle instance deployment</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: <SiRust size={16} color={rust} />,
				name: 'Rust',
			},
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiPostgresql size={16} color={postgres} />,
				name: 'PostgreSQL',
			},
			{
				icon: <SiAmazonaws size={16} color={aws} />,
				name: 'AWS',
			},
			{
				icon: <SiGithub size={16} />,
				name: 'GitHub',
			},
			{
				icon: <TbTool size={16} />,
				name: 'Microservices',
			},
		],
	},
	{
		title: 'Genius Dashboard',
		mainTech: 'React',
		repo: githubUrl('genius-dashboard', 'Yeti-Robotics'),
		images: ['/genius-dashboard/demo.png'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					A desktop application created with Tauri, which allows performant, hassle-free
					robot tuning and information display.
				</Text>
				<List size='sm'>
					<List.Item>Used a publisher/subscriber protocol for comms.</List.Item>
					<List.Item>
						Display published values in widgets for viewing and editing.
					</List.Item>
					<List.Item>Used drag and drop to allow for custom layouts.</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: <SiRust size={16} color={rust} />,
				name: 'Next.js',
			},
			{
				icon: <SiNodedotjs size={16} color={nodeJs} />,
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
		images: ['/img-convert/example.gif'],
		description: (
			<>
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
					, who inspired me to make this after I saw his success in python. I wanted to
					bring the ability to convert images to amoguses to every device that can run a
					browser.
				</Text>
				<List size='sm'>
					<List.Item>Uses input and Blob browser apis</List.Item>
					<List.Item>Pixel manipulation on raw image buffers</List.Item>
					<List.Item>Encodes final image into GIF format for downloading</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiVercel size={16} />,
				name: 'Vercel',
			},
		],
	},
	{
		title: 'Tstris',
		mainTech: 'TypeScript',
		images: ['/tstris/demo.png'],
		repo: 'https://github.com/tstris/tstris',
		deployed: 'https://www.npmjs.com/package/@tstris/core',
		description: (
			<>
				<Text size='sm' mt='sm'>
					A low-level implementation a falling block puzzle game similar to Tetris.
				</Text>
				<List size='sm'>
					<List.Item>Runtime agnostic implementation</List.Item>
					<List.Item>Proper rotation and sliding</List.Item>
					<List.Item>Hold and next piece queue</List.Item>
					<List.Item>Tests for core and react packages with with Jest</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: <SiJest size={16} color={jest} />,
				name: 'Jest',
			},
			{
				icon: <SiNpm size={16} color={npm} />,
				name: 'NPM',
			},
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
		],
	},
	{
		title: 'Tsar OS',
		mainTech: 'React',
		repo: githubUrl('tsar-os'),
		deployed: 'https://tsar-os.vercel.app/os',
		images: ['/tsar-os/desktop.png'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					A mock desktop made with React
				</Text>
				<List size='sm'>
					<List.Item>From scratch drag-n-drop</List.Item>
					<List.Item>Minimizing, full-screening, and closing windows</List.Item>
					<List.Item>Accurate time and date display</List.Item>
					<List.Item>Uses SCSS as a CSS preprocessor</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: <SiSass size={16} color={scss} />,
				name: 'SASS/SCSS',
			},
			{
				icon: <SiVercel size={16} />,
				name: 'Vercel',
			},
		],
	},
	{
		title: 'Yeti Site',
		mainTech: 'React',
		repo: githubUrl('yeti-robotics-site'),
		deployed: 'https://yeti-robotics-site.vercel.app',
		images: ['/yeti-site/home.png'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					A landing page website for my robotics team
				</Text>
				<List size='sm'>
					<List.Item>Uses MDX for content</List.Item>
					<List.Item>Custom image slideshow on home page</List.Item>
					<List.Item>Uses Styled Components for styling</List.Item>
					<List.Item>
						<i>Cool</i> icicles hanging off the header
					</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiGatsby size={16} color={gatsby} />,
				name: 'Gatsby',
			},
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: '💅',
				name: 'Styled Components',
			},
			{
				icon: <SiVercel size={16} />,
				name: 'Vercel',
			},
		],
	},
];
