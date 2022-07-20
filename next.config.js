const isProd = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: isProd ? '/portfolio/' : ''
});
