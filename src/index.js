import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Get the root element by its id
const root = document.getElementById("root");

// Create a root for React to render into
const rootElement = ReactDOM.createRoot(root);

// Render the App component into the root element
rootElement.render(<App />);

