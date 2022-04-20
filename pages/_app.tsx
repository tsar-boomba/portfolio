import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ReactNode, useState } from 'react';
import { cookieParser } from '../utils/cookieParser';
import { clientCookieSetter } from '../utils/clientCookieSetter';
import { Layout } from '../components/Layout';

interface _App<P = {}> {
	(props: AppProps & P): ReactNode;
	getInitialProps(ctx: AppContext): Record<string, any>;
}

const MyApp: _App<{ colorScheme: ColorScheme }> = (props) => {
	const [colorScheme, setColorScheme] = useState(props.colorScheme);
	/**
	 * Omit value param to toggle.
	 */
	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
		setColorScheme(value || nextColorScheme);
		clientCookieSetter('colorScheme', value || nextColorScheme, { maxAge: 60 * 60 * 24 * 365 });
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
			</Head>

			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						/** Put your mantine theme override here */
						colorScheme,
						primaryColor: 'orange',
						colors: {
							light: [
								'#ffffff',
								'#fcfcfc',
								'#f8f8f8',
								'#f5f5f5',
								'#f0f0f0',
								'#ebebeb',
								'#e5e5e5',
								'#e0e0e0',
								'#dadada',
								'#d2d2d2',
							],
						},
					}}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

MyApp.getInitialProps = (appCtx) => {
	App.getInitialProps(appCtx);
	return { colorScheme: cookieParser(appCtx.ctx.req?.headers.cookie)?.colorScheme || 'dark' };
};

export default MyApp;
