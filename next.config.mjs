import createNextIntlPlugin from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		})
		return config
	},
}

const withNextIntl = createNextIntlPlugin("./src/app/i18n//request.ts")
export default withNextIntl(nextConfig)
