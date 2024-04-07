import bundleAnalyzer from '@next/bundle-analyzer';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

// const isProd = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

const withVanillaExtract = createVanillaExtractPlugin();

/** @type import('next').NextConfig */
const config = {
	reactStrictMode: true,
	output: 'export',
	swcMinify: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	// assetPrefix: isProd ? '/portfolio/' : ''
};

export default withVanillaExtract(withBundleAnalyzer(config));
