import bundleAnalyzer from '@next/bundle-analyzer';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { type NextConfig } from 'next/types';

// const isProd = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

const withVanillaExtract = createVanillaExtractPlugin();

const config: NextConfig = {
	reactStrictMode: true,
	output: 'export',
	experimental: {
		reactCompiler: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	// assetPrefix: isProd ? '/portfolio/' : ''
};

export default withVanillaExtract(withBundleAnalyzer(config));
