import { vars } from '@/theme';
import { style } from '@vanilla-extract/css';

export const button = style({
	backgroundColor: vars.colors.white,

	selectors: {
		[vars.darkSelector]: {
			backgroundColor: vars.colors.dark[8],
		},
	},
});
