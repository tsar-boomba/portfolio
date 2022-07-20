import { Anchor, Text } from '@mantine/core';
import {
	SiAmazonaws,
	SiGatsby,
	SiJava,
	SiJest,
	SiMaterialui,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiNpm,
	SiPostgresql,
	SiReact,
	SiSass,
	SiStyledcomponents,
	SiTypescript,
	SiVercel,
} from 'react-icons/si';
import { ProjectCardProps } from './ProjectCard';

const githubUrl = (repo: string, owner = 'tsar-boomba') => `https://github.com/${owner}/${repo}`;

export const myProjects: ProjectCardProps[] = [
	{
		title: 'Yeti Scouting',
		mainTech: 'React',
		repo: githubUrl('2022-scouting-real', 'Yeti-Robotics'),
		deployed: 'https://scouting.yetirobotics.org',
		images: ['/scouting/stand-form.png'],
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
		images: ['/img-convert/example.gif'],
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
				to its limits. This is by far the project I am most proud of, and I consider it my
				magnum opus. Above is an example of a result of using the converter.
			</Text>
		),
		technologies: [
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiReact size={16} />,
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
	{
		title: 'Tsar OS',
		mainTech: 'React',
		repo: githubUrl('tsar-os'),
		deployed: 'https://tsar-os.vercel.app/os',
		images: ['/tsar-os/desktop.png'],
		description: (
			<Text size='sm' mt='sm'>
				This project may forever lay unfinished, but I'm proud of what I did before I had to
				abandon it to work on PUDO. It is a mock desktop made with React. I was planning on
				making full blown apps for it and you can see the beginnings of those plans on the
				site. You can open windows, resize windows, minimize windows, fullscreen windows,
				and close windows. Custom hooks and the context API are used to handle state between
				windows and provides for an authentic experience.
			</Text>
		),
		technologies: [
			{
				icon: <SiReact size={16} />,
				name: 'React',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiSass size={16} />,
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
			<Text size='sm' mt='sm'>
				This project was one of my first projects and introduced me to Styled Components. It
				was meant to be used as a general site for my robotics team, but we never ended up
				using it. It has <i>cool</i> icicles on the header, statically generates event pages
				using MDX and Gatsby's graphql api, and has a custom image slideshow on the home
				page. I'm quite proud of this site and I learned a lot about css, animation,
				responsive design, and statically generating content while making it.
			</Text>
		),
		technologies: [
			{
				icon: <SiReact size={16} />,
				name: 'React',
			},
			{
				icon: <SiGatsby size={16} />,
				name: 'Gatsby',
			},
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiStyledcomponents size={16} />,
				name: 'Styled Components',
			},
			{
				icon: <SiVercel size={16} />,
				name: 'Vercel',
			},
		],
	},
	{
		title: 'Portfolio Site',
		mainTech: 'React',
		repo: githubUrl('portfolio'),
		deployed: 'https://igamble.dev',
		images: ['/portfolio/hero.png'],
		description: (
			<Text size='sm' mt='sm'>
				This site was made to display my wide array of projects and experience in
				development. It uses{' '}
				<Anchor
					size='sm'
					target='_blank'
					rel='noopener noreferrer'
					href='https://mantine.dev'
				>
					mantine
				</Anchor>
				(if you haven't heard of it, its great, I'd deficiently use it over MUI) for theming
				and components and my package, ez-cookie, to server render theme to prevent{' '}
				<Anchor
					size='sm'
					target='_blank'
					rel='noopener noreferrer'
					href='https://css-tricks.com/flash-of-inaccurate-color-theme-fart/'
				>
					FART
				</Anchor>
				. Try reloading the page to see how your selected theme is rendered with no
				flashing.
			</Text>
		),
		technologies: [
			{
				icon: <SiReact size={16} />,
				name: 'React',
			},
			{
				icon: <SiNextdotjs size={16} />,
				name: 'Next.js',
			},
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiVercel size={16} />,
				name: 'Vercel',
			},
		],
	},
	{
		title: 'Java JS',
		mainTech: 'Java',
		repo: githubUrl('JavaJs'),
		description: (
			<Text size='sm' mt='sm'>
				Java JS is a collection of implementations of JavaScript APIs in Java. Right now
				there is not the JSArray class. I acts as close as it can the Array class in
				JavaScript by using Java lambdas through functional interfaces. It also extends
				AbstractList, meaning it has all of the method you would expect a list to have in
				Java. I also use this repository to test my Java formatting solution using prettier
				which I would like to add to my robotics team's repositories.
			</Text>
		),
		technologies: [
			{
				icon: <SiJava size={16} />,
				name: 'Java',
			},
		],
	},
	{
		title: 'Next Route Handler',
		mainTech: 'TypeScript',
		repo: githubUrl('next-route-handler'),
		deployed: 'https://www.npmjs.com/package/next-route-handler',
		description: (
			<Text size='sm' mt='sm'>
				I wrote next-route-handler for fun, while I was working on Yeti Scouting (check
				lib/api in that repo 🤭). I wanted to make it easier to use Next.js's serverless API
				routes. I already know about libraries that do this, but did it myself for fun.
			</Text>
		),
		technologies: [
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiNodedotjs size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiNpm size={16} />,
				name: 'NPM',
			},
		],
	},
	{
		title: 'EZ Cookie',
		mainTech: 'TypeScript',
		repo: githubUrl('next-route-handler'),
		deployed: 'https://www.npmjs.com/package/next-route-handler',
		description: (
			<Text size='sm' mt='sm'>
				Similarly to next-route-handler, I wrote EZ Cookie for fun, while I was working on
				another project, this time it was while I was working on this very site. The{' '}
				<Anchor
					size='sm'
					target='_blank'
					rel='noopener noreferrer'
					href='https://mantine.dev/theming/dark-theme/#save-color-scheme-in-cookie'
				>
					mantine docs
				</Anchor>{' '}
				said to use a package called cookies-next for help managing cookies. I went to look
				at the repo for the package, and it had a dependency, so I decided to make my own.
				On top of having zero dependencies, my package is smaller and has test written with
				Jest to ensure every release works as intended.
			</Text>
		),
		technologies: [
			{
				icon: <SiTypescript size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiNodedotjs size={16} />,
				name: 'TypeScript',
			},
			{
				icon: <SiJest size={16} />,
				name: 'Jest',
			},
			{
				icon: <SiNpm size={16} />,
				name: 'NPM',
			},
		],
	},
];
