import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import HabitProvider from "./HabitProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HabitProvider>
      <App />
    </HabitProvider>
  </StrictMode>
);
