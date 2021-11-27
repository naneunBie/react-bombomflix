import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routerApp } from "./configs/routerApp";
import './App.css';
import MyNavbar from './components/navbar';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <div>
        <MyNavbar />
      </div>

      <Router>
        <Switch>
          {routerApp.map((item, index) => {
            const { path, compt, exact } = item;
            return (
              <Route key={index} exact={exact} path={path} component={compt} />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
