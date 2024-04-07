import { vars } from '@/theme';
import { style } from '@vanilla-extract/css';

export const card = style({
	width: 160,
});

export const descriptionClass = style({
	padding: 8,
	maxWidth: 300,
	borderTop: `1px solid ${vars.colors.gray[2]}`,

	selectors: {
		[vars.darkSelector]: {
			borderTop: `1px solid ${vars.colors.dark[6]}`,
		},
	},
});

export const iconClass = style({
	padding: 8,
	margin: '8px 0 8px 8px',
	borderRadius: vars.radius.sm,
	backgroundColor: vars.colors.gray[0],
	lineHeight: 0,

	selectors: {
		[vars.darkSelector]: {
			backgroundColor: vars.colors.dark[5],
		},
	},
});

export const chevron = style({
	margin: 8,
	transition: 'transform 0.2s ease',
	cursor: 'pointer',
	color: vars.colors.primaryColors[6],
});
