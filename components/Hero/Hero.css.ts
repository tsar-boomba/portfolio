import { vars } from '@/theme';
import { style } from '@vanilla-extract/css';

const BREAKPOINT = '(max-width: 755px)';

export const wrapper = style({
	position: 'relative',
	boxSizing: 'border-box',
	backgroundColor: vars.colors.white,

	selectors: {
		[vars.darkSelector]: {
			backgroundColor: vars.colors.dark[9],
		},
	},
});

export const inner = style({
	position: 'relative',
	paddingTop: 220,
	paddingBottom: 120,

	'@media': {
		[BREAKPOINT]: {
			paddingBottom: 40,
			paddingTop: 80,
		},
	},
});

export const title = style({
	fontFamily: `Greycliff CF, ${vars.fontFamily}`,
	fontSize: 62,
	fontWeight: 900,
	lineHeight: 1.1,
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
			fontSize: 42,
			lineHeight: 1.2,
		},
	},
});

export const description = style({
	textAlign: 'center',
	marginTop: vars.spacing.xl,
	fontSize: 24,

	'@media': {
		[BREAKPOINT]: {
			fontSize: 18,
		},
	},
});

export const control = style({
	marginTop: `calc(${vars.spacing.xl} * 2)`,

	'@media': {
		[BREAKPOINT]: {
			marginTop: vars.spacing.xl,
		},
	},
});

export const background = style({
	position: 'absolute',
	display: 'flex',
	alignItems: 'flex-end',
	top: 60,
	left: 0,
	right: 0,
	bottom: 0,
	//background: '#000',
});

export const aurora = style({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	opacity: 0.35,
	selectors: {
		[vars.darkSelector]: {
			opacity: 0.25,
		},
	},
	//background:
	//	'linear-gradient(182deg, rgba(63,94,251,0.5) 0%, rgba(171,82,254,0.5) 9%, rgba(1,190,255,0.5) 18%, rgba(3,249,240,0.5) 28%, rgba(70,252,176,0.4) 37%, rgba(70,252,176,0.1) 80%)',
});
