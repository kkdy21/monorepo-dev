import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		legacy({
			targets: ["chrome > 60", "IE 10"],
		}),

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
