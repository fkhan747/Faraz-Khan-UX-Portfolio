import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";
import App from "@/App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// Prerendered HTML (react-snap) ships with content inside #root, so hydrate it;
// otherwise mount fresh. Lets the SPA work whether or not prerendering ran.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
