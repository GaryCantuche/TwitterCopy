import React from 'react';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './styles/styles.css';
import './styles/nav.css';
import Home from './Pages/Home';
import RightAside from './Components/Navigation/RightAside';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import NotLoggedBanner from './Components/Auth/NotLoggedBanner';
import { getSessionCookie } from './Utils/authUtils';

function App() {
  return (
    <BrowserRouter  baseline="/">
      <Switch>
        <Route exact path="/" >
         <Redirect to={"/signin"} />
        </Route>
        <Route exact path="/home" >
          <Navigation />
          <Home/>
          <RightAside />
        </Route>
        <Route exact path="/signin" >
          <SignIn />
        </Route>
        <Route exact path="/signup" >
          <SignUp />
        </Route>
        <Route exact path="/profile/:user" >
          <Navigation />
          <Profile />
          <RightAside />
          {getSessionCookie() ? '' : <NotLoggedBanner/>}
        </Route>
        <Route exact path="/profile/:user/retweets" >
          <Navigation />
          <Profile />
          <RightAside />
          <NotLoggedBanner/>
        </Route>
        <Route exact path="/profile/:user/pictures" >
          <Navigation />
          <Profile />
          <RightAside />
          <NotLoggedBanner/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;