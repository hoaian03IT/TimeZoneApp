import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

// create store redux
import createSageMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { mySaga } from "./redux/saga";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/GlobalState";
import axios from "axios";

// set default axios
axios.defaults.baseURL = "http://localhost:3033";

// Create the saga middleware
const sageMiddleware = createSageMiddleware();
// mount it on the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sageMiddleware),
});

sageMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <GlobalStyles>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <DataProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </DataProvider>
            </ThemeProvider>
        </Provider>
    </GlobalStyles>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
