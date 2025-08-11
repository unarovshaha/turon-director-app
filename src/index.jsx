import React from 'react';
import ReactDOM from 'react-dom/client';

import {StoreProvider} from "app/providers/storeProvider";
import {ThemeProvider} from "app/providers/themeProvider";
import {SearchProvider} from "app/providers/searchProvider";
import App from "./app/App";

import "./app/styles/index.sass"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <StoreProvider>
        <ThemeProvider>
            <SearchProvider>
                <App/>
            </SearchProvider>
        </ThemeProvider>
    </StoreProvider>
    // </React.StrictMode>
);

