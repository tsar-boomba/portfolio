'use client';

import '@mantine/core/styles.css';
import { ColorSchemeScript, DefaultMantineColor, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';
import { Layout } from '../components/Layout';
import { setCookie } from 'ez-cookies';
import { ColorProvider } from '../components/ColorProvider';
import { useLocalStorage } from '@mantine/hooks';
import { preload } from 'swr';
import { FUNCTION_URL } from '@/components/Layout/Spotify';
import { fetcher } from '@/utils/fetcher';
import { ModalsProvider } from '@mantine/modals';
import { theme } from '@/theme';

preload(FUNCTION_URL, fetcher);
preload(FUNCTION_URL + '/playing', fetcher);
fetch(
	'https://docs.google.com/document/d/1WAgMu51cO2KIKjmv9Z4uf-WnF_XtYkld/export?format=pdf&attachment=false',
	{
		mode: 'no-cors',
		cache: 'reload',
	},
);

const MyApp = ({ children }: { children?: ReactNode }) => {
	const [primaryColor, _setPrimaryColor] = useLocalStorage<DefaultMantineColor>({
		key: 'primaryColor',
		defaultValue: 'blue',
		getInitialValueInEffect: true,
	});

	const setPrimaryColor = (color: DefaultMantineColor) => {
		_setPrimaryColor(color);
		setCookie('primaryColor', color, { maxAge: 60 * 60 * 24 * 365 });
	};

	return (
		<html>
			<head>
				<ColorSchemeScript />
				<title>Isaiah Gamble - Portfolio</title>
				<meta name='title' content='Isaiah Gamble - Portfolio' />
				<meta
					name='description'
					content='A Full-stack developer with real world experience'
				/>
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💣</text></svg>'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://igamble.dev/' />
				<meta property='og:title' content='Isaiah Gamble - Portfolio' />
				<meta
					property='og:description'
					content='Full-stack developer with real world experience'
				/>
				<meta property='og:image' content='/img-convert/example.gif' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://igamble.dev/' />
				<meta property='twitter:title' content='Isaiah Gamble - Portfolio' />
				<meta
					property='twitter:description'
					content='Full-stack developer with real world experience'
				/>
				<meta property='twitter:image' content='/img-convert/example.gif' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<style>{'html { scroll-behavior: smooth; }'}</style>
			</head>

			<body>
				<MantineProvider
					defaultColorScheme='light'
					theme={{
						...theme,
						primaryColor,
					}}
				>
					<ColorProvider primaryColor={primaryColor} setPrimaryColor={setPrimaryColor}>
						<ModalsProvider>
							<Layout>{children}</Layout>
						</ModalsProvider>
					</ColorProvider>
				</MantineProvider>
			</body>
		</html>
	);
};

export default MyApp;