import {
	ActionIcon,
	Box,
	Group,
	Popover,
	Stack,
	Text,
	ThemeIcon,
	Tooltip,
	darken,
	useComputedColorScheme,
	useMantineTheme,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { usePrimaryColor } from '../ColorProvider';
import { CgDrop, CgCheck } from 'react-icons/cg';
import { colorButton, menuButton } from './ColorPicker.css';
import { useEffect, useRef } from 'react';

const CLICK_OUT_EVENTS: (keyof DocumentEventMap)[] = ['touchstart', 'mousedown'];

const ColorPicker = () => {
	const [opened, toggleOpened] = useToggle([false, true]);
	const control = useRef<HTMLButtonElement>(null);
	const dropdown = useRef<HTMLDivElement>(null);
	const theme = useMantineTheme();
	const colorScheme = useComputedColorScheme();
	const { primaryColor, setPrimaryColor } = usePrimaryColor();

	// Manually implement click outside detection cause mantine's doesn't work
	useEffect(() => {
		const handler = () => toggleOpened(false);

		const listener = (e: Event) => {
			!control.current?.contains(e.target as Node) &&
				!dropdown.current?.contains(e.target as Node) &&
				handler();
		};

		CLICK_OUT_EVENTS.forEach((ev) =>
			document.addEventListener(ev, listener, { passive: true }),
		);
		return () => CLICK_OUT_EVENTS.forEach((ev) => document.removeEventListener(ev, listener));
	}, []);

	const colors = Object.entries(theme.colors).map(([color, values]) => {
		const isSelected = primaryColor === color;
		return (
			<ThemeIcon
				key={color}
				className={colorButton}
				style={{
					backgroundColor: isSelected ? darken(values[6], 0.1) : values[6],
					border:
						color === 'dark' && colorScheme === 'dark' ? '1px dashed white' : undefined,
				}}
				onClick={() => setPrimaryColor(color)}
			>
				{isSelected ? <CgCheck /> : <></>}
			</ThemeIcon>
		);
	});

	return (
		<div>
			<Popover
				opened={opened}
				position='bottom'
				withArrow
				withinPortal={false}
				closeOnClickOutside
				closeOnEscape
			>
				<Popover.Target>
					<Tooltip withinPortal withArrow label='Change Color'>
						<ActionIcon
							ref={control}
							className={menuButton}
							onClick={() => toggleOpened()}
						>
							<CgDrop color='white' />
						</ActionIcon>
					</Tooltip>
				</Popover.Target>
				<Popover.Dropdown>
					<Box ref={dropdown} miw={150} maw={300} py={8}>
						<Stack align='center' onClick={(e) => e.stopPropagation()}>
							<Text fw={500} ta='center'>
								Choose a color
							</Text>
							<Group justify='center' grow>
								{colors}
							</Group>
						</Stack>
					</Box>
				</Popover.Dropdown>
			</Popover>
		</div>
	);
};

export default ColorPicker;
