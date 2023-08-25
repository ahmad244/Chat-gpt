import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById("root"));

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'salmon',
    }),
  },
});


root.render(
  
  <ThemeProvider theme={theme}> 
    <App />
  </ThemeProvider>
);
