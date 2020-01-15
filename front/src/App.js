import React from 'react';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Profile from './Components/Profile/Profile';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

      {/* <BrowserRouter>
        <Switch>
          <Route path='/Profile' component={Profile} />
        </Switch>
      </BrowserRouter> */}


      <MuiThemeProvider  >
        <Grid container alignItems='center' style={{ height: '100%' }}>
          <Grid item xs={12} >
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems='center' justify='center' >

                <Grid item xs={12} sm={6} style={{ 'text-align': 'center' }}>
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>

                <Grid item xs={12} sm={6} alignContent='center' style={{ 'text-align': 'center' }}  >
                  <BrowserRouter>
                    <Switch>
                      <Route exact path='/' component={SignIn} />
                      <Route path='/SignIn' component={SignIn} />
                      <Route path='/SignUp' component={SignUp} />
                      <Route path='/Profile' component={Profile} />
                    </Switch>
                  </BrowserRouter>
                </Grid>

              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>

    </div>
  );
}

export default App;
