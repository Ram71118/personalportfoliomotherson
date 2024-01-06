import React from "react";
import ReactDOMClient from "react-dom/client";
import { PortfolioPersonal } from "./screens/PortfolioPersonal";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PortfolioPersonal />);
