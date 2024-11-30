import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.mts";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom",
			setupFiles: "./test/setup.ts",
			coverage: {
				provider: "v8",
			},
			reporters: ["verbose"],
		},
	}),
);
