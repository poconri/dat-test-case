import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

export type PluginOptions = {
	selector: string;
};

if (import.meta.env.MODE === "development") {
	const renderElement = document.getElementById("root");
	if (renderElement) {
		createRoot(renderElement).render(<App/>);
	}
} else {
	window.DAMAGE_SELECTOR_API = {
		onInit: (options: PluginOptions) => {
			const { selector } = options;
			if (selector) {
				const renderElement = document.querySelector<HTMLElement>(selector);
				if (renderElement) {
					createRoot(renderElement).render(<App />);
				}
			}
		},
	};
}

document.addEventListener("DOMContentLoaded", () => {
		window.DAMAGE_SELECTOR_API?.onInit({
			selector: "#root",
		});
});