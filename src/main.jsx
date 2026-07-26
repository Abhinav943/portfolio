import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
  </StrictMode>,
);
