import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyle } from './config/global-style.js';
import {  ThemeProvider  } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import  {theme} from "./config/mui.theme"
import { Container } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
  <CssBaseline/>
  <GlobalStyle/>

    <App />
  </ThemeProvider>
  </BrowserRouter>

)
