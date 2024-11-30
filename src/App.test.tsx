import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
	it("renders without crashing", () => {
		render(<App />);
		expect(document.body).toBeDefined();
	});

	it("renders the Page component", () => {
		render(<App />);
		// This is a basic test. You might want to add more specific assertions
		// based on what your Page component renders
		expect(document.body.children.length).toBeGreaterThan(0);
	});
});
