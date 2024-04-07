import { vars } from '@/theme';
import { style } from '@vanilla-extract/css';

export const button = style({
	backgroundColor: vars.colors.white,
	boxShadow: vars.shadows.md,
	border: `1px solid ${vars.colors.gray[2]}`,

	selectors: {
		[vars.darkSelector]: {
			border: `1px solid ${vars.colors.dark[6]}`,
			backgroundColor: vars.colors.dark[8],
		},
	},
});
