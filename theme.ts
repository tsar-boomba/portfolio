'use client';

import { createTheme, Switch } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

export const theme = createTheme({
	cursorType: 'pointer',
	components: {
		Switch: Switch.extend({
			defaultProps: {
				withThumbIndicator: false,
			},
		}),
	},
});
export const vars = themeToVars(theme);
