import { SkillCardProps } from './SkillCard';
import { SiTypescript } from 'react-icons/si';
import { Text } from '@mantine/core';

export const mySkills: SkillCardProps[] = [
	{
		name: <Text component='h1'>TypeScript</Text>,
		icon: <SiTypescript size={36} />,
		description: (
			<Text>
				I began my development journey with Typescript and I can say wth certainty I
				wouldn't do it any other way. I've learned the intricacies of the type system and
				use it in every project to avoid bugs and speed up development. I also use it in all
				my packages to provide for a better experience for consumers of my package.
			</Text>
		),
	},
];
