import React from 'react';
import { createStyles, Switch, Group, useMantineColorScheme, Tooltip } from '@mantine/core';
import { CgSun, CgMoon } from 'react-icons/cg';

const useStyles = createStyles((theme) => ({
	root: {
		position: 'relative',
		'& *': {
			cursor: 'pointer',
		},
	},

	icon: {
		pointerEvents: 'none',
		position: 'absolute',
		zIndex: 1,
		top: 3,
	},

	iconLight: {
		left: 4,
		color: theme.white,
	},

	iconDark: {
		right: 4,
		color: theme.colors.gray[6],
	},
}));

const ThemeToggle = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const { classes, cx } = useStyles();

	return (
		<Tooltip withinPortal withArrow label='Toggle Theme'>
			<Group position='center' my={30}>
				<div className={classes.root}>
					<CgSun
						className={cx(classes.icon, classes.iconLight)}
						size={18}
						display={colorScheme === 'dark' ? 'block' : 'none'}
					/>
					<CgMoon
						className={cx(classes.icon, classes.iconDark)}
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
