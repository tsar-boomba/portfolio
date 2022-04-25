import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import {
	ColorScheme,
	ColorSchemeProvider,
	DefaultMantineColor,
	MantineProvider,
} from '@mantine/core';
import { ReactNode, useState } from 'react';
import { Layout } from '../components/Layout';
import { setCookie, getCookie } from 'ez-cookies';
import { ColorProvider } from '../components/ColorProvider';

interface _App<P = {}> {
	(props: AppProps & P): ReactNode;
	getInitialProps(ctx: AppContext): Record<string, unknown>;
}

const MyApp: _App<{ colorScheme: ColorScheme; primaryColor: DefaultMantineColor }> = (props) => {
	const [primaryColor, _setPrimaryColor] = useState(props.primaryColor);
	const [colorScheme, setColorScheme] = useState(props.colorScheme);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
		setColorScheme(value || nextColorScheme);
		setCookie('colorScheme', value || nextColorScheme, { maxAge: 60 * 60 * 24 * 365 });
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

MyApp.getInitialProps = (appCtx) => {
	App.getInitialProps(appCtx);
	return {
		colorScheme: getCookie('colorScheme', { req: appCtx.ctx.req }) || 'dark',
		primaryColor: getCookie('primaryColor', { req: appCtx.ctx.req }) || 'orange',
	};
};

export default MyApp;
