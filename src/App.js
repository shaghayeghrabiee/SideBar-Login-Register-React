import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import NavBar from './component/navBar';
import MainNavBar from './component/mainNavBar';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/products';
import Reports from './pages/reports';
import Home from './pages/Home';
import './App.css'

const App = () => {
  return (
    <div>
      <MainNavBar />
      <NavBar />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/products" component={Products} />
        <Route path="/Reports" component={Reports} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;

