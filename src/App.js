import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoughtItemsPage from './Components/Pages/BoughtItemsPage/BoughtItemsPage'
import ReceivedListPage from './Components/Pages/ReceivedListPage/ReceivedListPage'
import TabNavigator from './Components/Pages/Shared/TabNavigator/TabNavigator'
import './App.css';

function App() {

  return (
      <BrowserRouter>
        <div className="app">
            <TabNavigator />
            <Switch>
                <Route exact path="/receivedListPage">
                    <ReceivedListPage />
                </Route>
                <Route path='/boughtItemsPage'>
                    <BoughtItemsPage />
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App;
