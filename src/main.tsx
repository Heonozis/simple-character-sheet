import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./theme";
import store from './redux/store'

import App from './App'
import './index.css'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)
