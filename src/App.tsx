import { Route, BrowserRouter } from 'react-router-dom'
import './App.scss';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/home';
import CreateEditForm from './pages/home/createEditForm';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { Paper, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const themeState = useSelector((state: any) => state.contact.theme);

  const darkTheme = createMuiTheme(
    {
      palette:{
        type:'dark',
        primary:{
          main:'#EEB76B',          
        },
        secondary:{
          main:'#E2703A',          
        },
        background:{
          paper:'#310B0B',
        }
      }
    }
  )
  const lightTheme = createMuiTheme(
    {
      palette:{
        type:'light',       
        primary:{
          main:'#f1f1f1'
        }
      }
    }
  )
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeState === 'dark'?darkTheme:lightTheme }>
        {/* <Paper> */}
        <MainLayout>
          <Route exact path="/" component={HomePage} />
          <Route path="/createOrEdit" component={CreateEditForm} />
        </MainLayout>
        {/* </Paper> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App