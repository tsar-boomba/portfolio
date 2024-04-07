import { MantineColor, MantineTheme, Paper, PaperProps, useMantineTheme } from '@mantine/core';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type GradientReturn = { from?: MantineColor; to?: MantineColor; deg?: number };

interface Props {
	gradient?: (theme: MantineTheme) => GradientReturn;
}

const handleGradient = (theme: MantineTheme, gradient: GradientReturn): string => {
	const fromColor = gradient.from
		? gradient.from in theme.colors
			? theme.colors[gradient.from][4]
			: gradient.from
		: theme.colors[theme.primaryColor][4];

	const toColor = gradient.to
		? gradient.to in theme.colors
			? theme.colors[gradient.to][7]
			: gradient.to
		: theme.colors[theme.primaryColor][7];

	return `linear-gradient(${gradient.deg || -60}deg, ${fromColor} 0%, ${toColor} 100%)`;
};

const GradientCard: React.FC<
	PropsWithChildren<Props & PaperProps & ComponentPropsWithoutRef<'div'>>
> = ({ children, gradient = () => ({}), style, ...props }) => {
	if (typeof style === 'function' || Array.isArray(style))
		throw new Error('sx prop may not be a function or array for this component.');

	const theme = useMantineTheme();

	return (
		<Paper
			{...props}
			style={{ ...style, backgroundImage: handleGradient(theme, gradient(theme)) }}
		>
			{children}
		</Paper>
	);
};

export default GradientCard;
