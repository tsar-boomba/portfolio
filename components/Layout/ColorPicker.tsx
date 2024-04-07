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
import { useToggle, useClickOutside } from '@mantine/hooks';
import { usePrimaryColor } from '../ColorProvider';
import { CgDrop, CgCheck } from 'react-icons/cg';
import { colorButton, menuButton } from './ColorPicker.css';

const ColorPicker = () => {
	const [opened, toggleOpened] = useToggle([false, true]);
	const ref = useClickOutside(() => toggleOpened(false));
	const theme = useMantineTheme();
	const colorScheme = useComputedColorScheme();
	const { primaryColor, setPrimaryColor } = usePrimaryColor();

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
		<div ref={ref}>
			<Popover opened={opened} position='bottom' withArrow withinPortal={false}>
				<Popover.Target>
					<Tooltip withinPortal withArrow label='Change Color'>
						<ActionIcon className={menuButton} onClick={() => toggleOpened()}>
							<CgDrop color='white' />
						</ActionIcon>
					</Tooltip>
				</Popover.Target>
				<Popover.Dropdown>
					<Box miw={150} maw={300} py={8}>
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
