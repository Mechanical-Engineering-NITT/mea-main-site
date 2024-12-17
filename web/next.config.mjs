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
			{
				protocol: "https",
				hostname: "mea.nitt.edu",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
