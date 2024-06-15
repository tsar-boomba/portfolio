import { vars } from '@/theme';
import { rem } from '@mantine/core';
import { style } from '@vanilla-extract/css';

export const lines = style({
	fontSize: rem(80),
	fontWeight: 1000,
	margin: 0,
	lineHeight: 1,
	textShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
	selectors: {
		[vars.darkSelector]: {
			textShadow: '0px 0px 16px rgba(255, 255, 255, 0.2)',
		},
	},
});
