import { style } from '@vanilla-extract/css';
import { vars } from '@/theme';

export const root = style({
	position: 'relative',
	cursor: 'pointer',
});

export const icon = style({
	pointerEvents: 'none',
	position: 'absolute',
	zIndex: 1,
	top: 3,
	color: vars.colors.gray[6],

	selectors: {
		[vars.darkSelector]: {
			color: vars.colors.white,
		},
	},
});

export const iconDark = style({
	right: 4,

	selectors: {
		[vars.darkSelector]: {
			left: 4,
			color: vars.colors.white,
		},
	},
});

export const iconLight = style({
	display: 'none',

	selectors: {
		[vars.darkSelector]: {
			left: 4,
			color: vars.colors.white,
			display: 'block',
		},
	},
});
