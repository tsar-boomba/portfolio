import { vars } from '@/theme';
import { style } from '@vanilla-extract/css';

export const card = style({
	maxWidth: 500,
});

export const section = style({
	borderBottom: `1px solid ${vars.colors.gray[3]}`,
	paddingLeft: vars.spacing.md,
	paddingRight: vars.spacing.md,
	paddingBottom: vars.spacing.md,

	selectors: {
		[vars.darkSelector]: {
			borderBottom: `1px solid ${vars.colors.dark[4]}`,
		},
	},
});

export const badge = style({
	selectors: {
		[vars.darkSelector]: {},
	},
});

export const label = style({
	textTransform: 'uppercase',
	fontSize: vars.fontSizes.xs,
	fontWeight: 700,
});

export const githubButton = style({
	borderWidth: 2,
	flex: 1,
});
