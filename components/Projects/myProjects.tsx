import { Anchor, Code, List, Text } from '@mantine/core';
import {
	SiAmazonwebservices,
	SiDocker,
	SiEspressif,
	SiGatsby,
	SiJest,
	SiLinux,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiOnnx,
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
		title: 'Motorx',
		mainTech: 'Rust',
		repo: githubUrl('motorx'),
		description: (
			<>
				<Text size='sm' mt='sm'>
					My reverse-proxy made in 100% safe rust!
				</Text>
				<List size='sm'>
					<List.Item>Supports http/1.1, http/2, and http/3!</List.Item>
					<List.Item>http/1.1 or http/2 cleartext for upstreams</List.Item>
					<List.Item>Simple JSON configuration</List.Item>
					<List.Item>Written with async Rust for CPU efficiency</List.Item>
					<List.Item>
						TLS termination through provided certs or{' '}
						<Anchor
							size='sm'
							href='https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment'
							rel='noopener noreferer'
						>
							ACME
						</Anchor>{' '}
						for automatic certs
					</List.Item>
					<List.Item>
						TLS Server Name Indication (SNI) based routing for hosting multiple sites on
						a single IP address
					</List.Item>
					<List.Item>
						All of these features are used in production to host some of my sites
					</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiRust size={16} color={rust} />,
				name: 'Rust',
			},
		],
	},
	{
		title: 'My Music',
		mainTech: 'Rust',
		repo: githubUrl('my-music'),
		description: (
			<>
				<Text size='sm' mt='sm'>
					A self-hostable music manager and player
				</Text>
				<List size='sm'>
					<List.Item>
						Web client with a native-like experience through the{' '}
						<Anchor href='https://developer.mozilla.org/en-US/docs/Web/API/MediaSession'>
							MediaSession API
						</Anchor>
					</List.Item>
					<List.Item>
						Supports multiple storage backends through{' '}
						<Anchor href='https://opendal.apache.org/'>OpenDAL</Anchor>
					</List.Item>
					<List.Item>Extracts album covers from song metadata</List.Item>
					<List.Item>
						Leverages presigned URLs where possible to reduce bandwidth costs
					</List.Item>
					<List.Item>
						Mobile app created with{' '}
						<Anchor href='https://reactnative.dev/'>React Native</Anchor> in development
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
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
		],
	},
	{
		title: 'My Feed',
		mainTech: 'Rust',
		repo: githubUrl('my-feed'),
		images: ['/my-feed.png'],
		deployed: 'https://my.igamble.dev',
		description: (
			<>
				<Text size='sm' mt='sm'>
					A self-hostable RSS feed aggregator
				</Text>
				<List size='sm'>
					<List.Item>Scrapes thumbnail images for articles</List.Item>
					<List.Item>Preview articles from feed before adding to poll list</List.Item>
					<List.Item>Extremely light on CPU and memory usage</List.Item>
				</List>
			</>
		),
		technologies: [
			{
				icon: <SiRust size={16} color={rust} />,
				name: 'Rust',
			},
			{
				icon: <SiReact size={16} color={react} />,
				name: 'React',
			},
			{
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
		],
	},
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
		title: 'Gaze Estimation',
		mainTech: 'Rust',
		repo: githubUrl('tom-gaze'),
		deployed: 'https://gaze.igamble.dev',
		images: ['/gaze/demo.png'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					Demo of using Onnx Runtime to run a gaze estimation model. The web version is
					linked below, but there is a native Rust version available in the repository as
					well.
				</Text>
				<List size='sm'>
					<List.Item>
						Used Web APIs for camera access as well as image manipulation.
					</List.Item>
					<List.Item>Used OpenCV for image processing in the native version.</List.Item>
					<List.Item>
						Used basic tensor operations and Non-Maximum Suppression to pre-process
						inputs as well as post-process out puts.
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
				icon: <SiTypescript size={16} color={typescript} />,
				name: 'TypeScript',
			},
			{
				icon: <SiOnnx size={16} />,
				name: 'Onnx',
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
		images: ['/milky-web/example.png'],
		description: (
			<>
				<Text size='sm' mt='sm'>
					Milky Web is a MVP for a business idea I had in 2022. It was about providing
					easy access to web infrastructure for anyone.
				</Text>
				<List size='sm'>
					<List.Item>Robust authentication using JWT</List.Item>
					<List.Item>Subscriptions with Stripe</List.Item>
					<List.Item>
						Uses AWS EC2, Route52, and Lambda to handle infrastructure
					</List.Item>
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
				icon: <SiAmazonwebservices size={16} color={aws} />,
				name: 'AWS',
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
					A low-level implementation a falling block puzzle game similar to Tetris. There
					is a demo created using the library at the bottom of this page.
				</Text>
				<List size='sm'>
					<List.Item>Runtime agnostic implementation</List.Item>
					<List.Item>Proper rotation and sliding</List.Item>
					<List.Item>Hold and next piece queue</List.Item>
					<List.Item>Tests for core and react packages with Jest</List.Item>
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
