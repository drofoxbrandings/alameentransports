import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const container = document.getElementById("root");
const root = createRoot(container);
const theme = createTheme({
  palette: {
    primary: {
      main: "#C53A50",
      light: '#E36478', 
      dark: '#89071C'
    },
    secondary: {
      main: "#000",
      light: "#000000bf",
    },
    white: {
      main: "#ffffff",
      dark: '#c8c8c8'
    },
    error: {
      main: "#d32f2f",
    },
  },
});

root.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>
);
