import type { Container } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("app") as Container;
const root = createRoot(container);
root.render(
	<BrowserRouter
		future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
	>
		<App />
	</BrowserRouter>,
);
