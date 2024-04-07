import React from 'react';
import { Switch, Group, useMantineColorScheme, Tooltip } from '@mantine/core';
import { CgSun, CgMoon } from 'react-icons/cg';
import { icon, iconDark, iconLight, root } from './ThemeToggle.css';

const ThemeToggle = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Tooltip withinPortal withArrow label='Toggle Theme'>
			<Group justify='center' my={30}>
				<div className={root}>
					<CgSun
						className={icon + ' ' + iconLight}
						size={18}
						display={colorScheme === 'dark' ? 'block' : 'none'}
					/>
					<CgMoon
						className={icon + ' ' + iconDark}
						size={18}
						display={colorScheme !== 'dark' ? 'block' : 'none'}
					/>
					<Switch
						checked={colorScheme === 'dark'}
						onChange={() => toggleColorScheme()}
						size='md'
					/>
				</div>
			</Group>
		</Tooltip>
	);
};

export default ThemeToggle;
