import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./theme.ts";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./contexts/auth/AuthProvider.tsx";
import { OrganizationProvider } from "./contexts/organization/OrganizationProvider.tsx";
import { AnalysisProvider } from "./contexts/analysis/AnalysisProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AuthProvider>
        <OrganizationProvider>
          <AnalysisProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AnalysisProvider>
        </OrganizationProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
