import React, { ReactNode } from 'react';
import { Button, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { button } from './ContactCard.css';

interface CopyButtonProps {
	text?: string;
	href?: string;
	icon?: ReactNode;
	children: ReactNode;
}

const ContactCard: React.FC<CopyButtonProps> = ({ text, children, icon, href }) => {
	const clipboard = useClipboard();

	return (
		<Tooltip
			label='Copied to clipboard!'
			offset={10}
			position='bottom'
			radius='xl'
			transitionProps={{ transition: 'slide-down', duration: 200 }}
			opened={clipboard.copied}
		>
			<Button
				component='a'
				download={false}
				variant='outline'
				size='xl'
				className={button}
				href={href}
				leftSection={icon}
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
