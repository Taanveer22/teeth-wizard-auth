import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import PublicRoutes from "./routes/PublicRoutes";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={PublicRoutes}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
