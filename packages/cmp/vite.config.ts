import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: [
					[
						"@emotion/babel-plugin",
						{
							autoLabel: "dev-only",
							labelFormat: "[dirname]--[filename]--[local]___",
						},
					],
					"@babel/plugin-transform-runtime",
				],
				presets: [
					["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }],
					["@babel/preset-typescript", { onlyRemoveTypeImports: true }],
				],
			},
		}),
	],
	publicDir: "../../shared-asset",
	server: {
		port: 3000,
	},
	css: {
		devSourcemap: true,
	},
	envPrefix: "REACT_APP_",
});
