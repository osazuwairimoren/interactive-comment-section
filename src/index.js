import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ContextProvider from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="attribution">
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
            <a href="https://github.com/osazuwairimoren" target="_blank">Osazuwa</a>.
        </div>
        <ContextProvider></ContextProvider>
    </React.StrictMode>
);
