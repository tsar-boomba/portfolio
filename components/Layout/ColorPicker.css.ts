import { vars } from '@/theme';
import { style } from '@vanilla-extract/css';

export const menuButton = style({
	backgroundColor: vars.colors.primaryColors.filled,
	cursor: 'pointer',
	':hover': {
		backgroundColor: vars.colors.primaryColors.filledHover,
	},
});

export const colorButton = style({
	borderRadius: '50%',
	cursor: 'pointer',
});
