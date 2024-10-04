import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  </StrictMode>
);
