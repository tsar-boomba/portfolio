import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import {
	ColorScheme,
	ColorSchemeProvider,
	DefaultMantineColor,
	MantineProvider,
} from '@mantine/core';
import { ReactNode } from 'react';
import { Layout } from '../components/Layout';
import { setCookie } from 'ez-cookies';
import { ColorProvider } from '../components/ColorProvider';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';

interface _App<P = {}> {
	(props: AppProps & P): ReactNode;
	getInitialProps?(ctx: AppContext): Promise<AppInitialProps & P>;
}

const MyApp: _App<{ colorScheme: ColorScheme; primaryColor: DefaultMantineColor }> = (props) => {
	const preferredColorScheme = useColorScheme();
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'colorScheme',
		defaultValue: preferredColorScheme,
		getInitialValueInEffect: true,
	});
	const [primaryColor, _setPrimaryColor] = useLocalStorage<DefaultMantineColor>({
		key: 'primaryColor',
		defaultValue: 'blue',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: 'dark' | 'light') => {
		const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
		setColorScheme(value || nextColorScheme);
	};

	const setPrimaryColor = (color: DefaultMantineColor) => {
		_setPrimaryColor(color);
		setCookie('primaryColor', color, { maxAge: 60 * 60 * 24 * 365 });
	};

	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>{'Isaiah Gamble - Portfolio'}</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<style>{'html { scroll-behavior: smooth; }'}</style>
			</Head>

			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						/** Put your mantine theme override here */
						colorScheme,
						primaryColor,
						cursorType: 'pointer',
					}}
				>
					<ColorProvider primaryColor={primaryColor} setPrimaryColor={setPrimaryColor}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ColorProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

export default MyApp;
