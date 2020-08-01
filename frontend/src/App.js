import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/nav.css';
import Home from './Pages/Home';
import RightAside from './Components/Navigation/RightAside';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
      <Switch>
        <Route exact path="/" >
        </Route>
        <Route exact path="/home" >
          <Home/>
        </Route>
      </Switch>
      <RightAside />
    </BrowserRouter>
  );
}

export default App;