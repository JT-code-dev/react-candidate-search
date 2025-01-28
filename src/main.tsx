import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import Components
import App from "./App";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";
import ErrorPage from "./pages/ErrorPage";

// Define the Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Catch-all for invalid routes
    children: [
      {
        index: true, // Default route
        element: <CandidateSearch />,
      },
      {
        path: "SavedCandidates",
        element: <SavedCandidates />,
      },
    ],
  },
]);

// Mount the App to the DOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
