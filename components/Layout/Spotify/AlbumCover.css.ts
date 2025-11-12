import { style } from '@vanilla-extract/css';
import { vars } from '@/theme';
import { rem } from '@mantine/core';

const DEFAULT_SIZE = 72.8;

export const container = style({
	position: 'relative',
	'@media': {
		[vars.smallerThan('sm')]: {
			display: 'none',
		},
	},
});

export const image = style({
	borderRadius: vars.radius.sm,
	border: `1px solid ${vars.colors.dark[4]}`,
	[vars.lightSelector]: {
		border: `1px solid ${vars.colors.gray[3]}`,
	},
	height: rem(DEFAULT_SIZE),
	width: rem(DEFAULT_SIZE),
});

export const noImage = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: vars.radius.sm,
	height: rem(DEFAULT_SIZE),
	width: rem(DEFAULT_SIZE),
	border: `1px solid ${vars.colors.dark[4]}`,
	background: vars.colors.dark[8],
	[vars.lightSelector]: {
		border: `1px solid ${vars.colors.gray[3]}`,
		background: vars.colors.white,
	},
});
