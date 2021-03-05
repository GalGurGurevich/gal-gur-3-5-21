import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoughtItems from './Components/Pages/BoughtItems/BoughtItems'
import './App.css';

function App() {
  // return (
  //   <div className="app">
  //     <ItemList />
  //   </div>
  // );

  {/* <BrowserRouter>
      <div className="app">
          <Switch>
              <Route path='/'>
                  <BoughtItems />
              </Route>
          </Switch>
      </div>
    </BrowserRouter> */}

  return (
      <BrowserRouter>
        <div className="app">
            <Switch>
                <Route path='/'>
                    <BoughtItems />
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App;
