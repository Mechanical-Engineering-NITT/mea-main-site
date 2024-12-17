/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3001",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
