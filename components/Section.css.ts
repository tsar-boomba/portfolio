import { vars } from '@/theme';
import { style } from '@vanilla-extract/css';

const BREAKPOINT = '(max-width: 755px)';

export const evenWrapper = style({
	position: 'relative',
	boxSizing: 'border-box',
	backgroundColor: vars.colors.white,

	selectors: {
		[vars.darkSelector]: {
			backgroundColor: vars.colors.dark[8],
		},
	},
});

export const oddWrapper = style({
	position: 'relative',
	boxSizing: 'border-box',

	selectors: {
		[vars.lightSelector]: {
			backgroundColor: vars.colors.gray[0],
		},
	},
});

export const inner = style({
	position: 'relative',
	paddingTop: 100,
	paddingBottom: 100,

	'@media': {
		[BREAKPOINT]: {
			paddingBottom: 40,
			paddingTop: 40,
		},
	},
});

export const title = style({
	fontFamily: `Greycliff CF, ${vars.fontFamily}`,
	fontSize: 56,
	fontWeight: 900,
	lineHeight: 1.3,
	margin: 0,
	padding: 0,
	textAlign: 'center',
	color: vars.colors.black,

	selectors: {
		[vars.darkSelector]: {
			color: vars.colors.white,
		},
	},

	'@media': {
		[BREAKPOINT]: {
			fontSize: 36,
			lineHeight: 1.2,
		},
	},
});
