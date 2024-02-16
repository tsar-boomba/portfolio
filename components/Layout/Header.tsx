import React, { useEffect, useRef, useState } from 'react';
import {
	createStyles,
	Container,
	Group,
	Burger,
	Text,
	useMantineTheme,
	Collapse,
	Paper,
	ActionIcon,
	Title,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import ThemeToggle from './ThemeToggle';
import ColorPicker from './ColorPicker';
import { SiSpotify } from 'react-icons/si';
import { spotify } from '@/utils/brandColors';
import { openModal } from '@mantine/modals';
import { SpotifyModal } from './Spotify/SpotifyModal';

const useStyles = createStyles((theme) => ({
	root: {
		height: 60,
		width: '100vw',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 2,
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',
		position: 'relative',
		width: '100%',
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 30,
		fontWeight: 900,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[theme.fn.smallerThan('xs')]: {
			fontSize: 24,
		},
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('xs')]: {
			display: 'none',
		},
	},

	mobileMenu: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		top: '60px',
		width: '100%',
		left: 0,
		zIndex: 1,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		[theme.fn.largerThan('xs')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
			color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
		},
	},
}));

interface HeaderSimpleProps {
	links: { link: string; label: string }[];
}

const CLICK_OUT_EVENTS: (keyof DocumentEventMap)[] = ['touchstart', 'mousedown'];

const Header: React.FC<HeaderSimpleProps> = ({ links }) => {
	const [opened, toggleOpened] = useToggle([false, true]);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(links[0].link);
	const theme = useMantineTheme();
	const { classes, cx } = useStyles();

	useEffect(() => {
		const handler = () => toggleOpened(false);

		const listener = (e: Event) => {
			!menuRef.current?.contains(e.target as Node) &&
				!buttonRef.current?.contains(e.target as Node) &&
				handler();
		};

		CLICK_OUT_EVENTS.forEach((ev) => document.addEventListener(ev, listener));
		return () => CLICK_OUT_EVENTS.forEach((ev) => document.removeEventListener(ev, listener));
	}, [menuRef, buttonRef]);

	const items = links.map((link) => (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a
			key={link.label}
			href={link.link}
			target={link.link.startsWith('http') ? '_blank' : undefined}
			rel={link.link.startsWith('http') ? 'norefrerer' : undefined}
			className={cx(classes.link, { [classes.linkActive]: active === link.link })}
			onClick={(e) => {
				e.preventDefault();
				setActive(link.link);
				toggleOpened(false);
				location.href = link.link;
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Paper shadow='md' component='header' className={classes.root}>
			<Container className={classes.header}>
				<Text
					component='h1'
					variant='gradient'
					className={classes.title}
					gradient={{
						from: theme.colors[theme.primaryColor][8],
						to: theme.colors[theme.primaryColor][5],
						deg: 75,
					}}
					align='center'
				>
					Isaiah G.
				</Text>
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

				<Burger
					opened={opened}
					ref={buttonRef}
					onClick={() => toggleOpened()}
					className={classes.burger}
					size='sm'
				/>

				<Group>
					<ThemeToggle />
					<ColorPicker />
					<ActionIcon
						variant='filled'
						style={{ backgroundColor: spotify }}
						onClick={() =>
							openModal({
								title: <Title style={{ color: spotify }}>Top Tracks</Title>,
								children: <SpotifyModal />,
								lockScroll: true,
							})
						}
					>
						<SiSpotify size={16} />
					</ActionIcon>
				</Group>

				<div className={classes.mobileMenu} ref={menuRef}>
					<Collapse in={opened}>{items}</Collapse>
				</div>
			</Container>
		</Paper>
	);
};

export default Header;
