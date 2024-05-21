// main.tsx or main.jsx
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./page";
import Store from './store/page';
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
    <NextUIProvider>
        <main className="dark text-foreground bg-background">
        <App />
        <Store/>
        </main>
    </NextUIProvider>
    </React.StrictMode>
);

