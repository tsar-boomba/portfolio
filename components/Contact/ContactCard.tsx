import React, { ReactNode } from 'react';
import { Button, createStyles, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

interface CopyButtonProps {
	text?: string;
	href?: string;
	icon?: ReactNode;
	children: ReactNode;
}

const useStyles = createStyles((theme) => ({
	button: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		shadow: theme.shadows.md,
		border: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
		}`,
	},
}));

const ContactCard: React.FC<CopyButtonProps> = ({ text, children, icon, href }) => {
	const { classes } = useStyles();
	const clipboard = useClipboard();
	return (
		<Tooltip
			label='Copied to clipboard!'
			gutter={10}
			placement='center'
			position='bottom'
			radius='xl'
			transition='slide-down'
			transitionDuration={200}
			opened={clipboard.copied}
		>
			<Button
				component='a'
				variant='outline'
				size='xl'
				className={classes.button}
				href={href}
				leftIcon={icon}
				target='_blank'
				rel='noopener noreferrer'
				onClick={text ? () => clipboard.copy(text) : undefined}
			>
				{children}
			</Button>
		</Tooltip>
	);
};

export default ContactCard;
