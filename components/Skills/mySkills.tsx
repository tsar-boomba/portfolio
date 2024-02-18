import { SkillCardProps } from './SkillCard';
import {
	SiC,
	SiCss3,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRust,
	SiTypescript,
} from 'react-icons/si';
import { Text } from '@mantine/core';
import {
	c,
	css,
	mongodb,
	nodeJs,
	postgres,
	react,
	rust,
	typescript,
} from '../../utils/brandColors';

export const mySkills: SkillCardProps[] = [
	{
		name: <Text component='h1'>TypeScript</Text>,
		icon: <SiTypescript size={18} color={typescript} />,
		description: (
			<Text>
				I began my development journey with TypeScript and I can say wth certainty I
				wouldn't do it any other way. I've learned the intricacies of the type system and
				use it in every project to avoid bugs and speed up development. I also use it in all
				my packages to provide for a better experience for consumers.
			</Text>
		),
	},
	{
		name: <Text component='h1'>React</Text>,
		icon: <SiReact size={18} color={react} />,
		description: (
			<Text>
				React was my first front-end library/framework and I enjoy making beautiful and
				functional user interfaces with it.
			</Text>
		),
	},
	{
		name: <Text component='h1'>CSS</Text>,
		icon: <SiCss3 size={18} color={css} />,
		description: (
			<Text>
				Through my many projects I have gained experience with css in many forms. I have
				used plain CSS, CSS Modules, pre-processors like SASS/SCSS, and CSS-in-js like
				styled-components and emotion.
			</Text>
		),
	},
	{
		name: <Text component='h1'>Node.js</Text>,
		icon: <SiNodedotjs size={18} color={nodeJs} />,
		description: (
			<Text>
				I've used node.js to build the backend for all of my full-stack projects. I have
				experience using serverless functions, Nest.js, and JSON Web Token Auth.
			</Text>
		),
	},
	{
		name: <Text component='h1'>Next.js</Text>,
		icon: <SiNextdotjs size={18} />,
		description: (
			<Text>
				I've tried different ways to create React projects like gatsby and create-react-app,
				but I always find myself choosing Next. It makes creating performant and interactive
				react apps very simple. In fact, this site is made with Next.js and I used its
				server-side rending to make the theme seamless between reloads.
			</Text>
		),
	},
	{
		name: <Text component='h1'>MongoDB</Text>,
		icon: <SiMongodb size={18} color={mongodb} />,
		description: (
			<Text>
				MongoDB is a document based Database which I have become very familiar with, using
				it in my second largest project and some smaller ones. I have experience using it
				through their package and mongoose, a library to allow for creating models and
				enforcing schema on collections.
			</Text>
		),
	},
	{
		name: <Text component='h1'>PostgreSQL</Text>,
		icon: <SiPostgresql size={18} color={postgres} />,
		description: (
			<Text>
				PostgreSQL is one of the most widely used relational databases. Through using it in
				my largest project I have become familiar with SQL and Object Relational Mappers
				(ORMs) like TypeORM and Prisma.
			</Text>
		),
	},
	{
		name: <Text component='h1'>Rust</Text>,
		icon: <SiRust size={18} color={rust} />,
		description: <Text>I love rust</Text>,
	},
	{
		name: <Text component='h1'>Java</Text>,
		icon: (
			<img
				src='https://www.vectorlogo.zone/logos/java/java-icon.svg'
				height={18}
				width={18}
			/>
		),
		description: <Text>java</Text>,
	},
	{
		name: <Text component='h1'>C</Text>,
		icon: <SiC size={18} color={c} />,
		description: <Text>C is cool</Text>,
	},
];
