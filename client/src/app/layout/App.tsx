import { ThemeProvider } from '@emotion/react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/home/HomePage';
import Header from './Header';

function App() { 

  const [darkMode,setDarkMode] = useState(false);
  
  const paletteMode = darkMode ? 'dark' : 'light';
 
  const theme=createTheme({
    palette:{
      mode:paletteMode,
      background:{
        default: paletteMode ==='light' ?'#eaeaea' : '#121212'
      }
    }
  });

  function handleThemeChange(){
    setDarkMode(!darkMode)
  }

  return ( 
    <ThemeProvider theme={theme}>
      
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/> 
      <Container>
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route> 
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/catalog/:id' element={<ProductDetails/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      </Container>
    </ThemeProvider> 
  );
}

export default App;
