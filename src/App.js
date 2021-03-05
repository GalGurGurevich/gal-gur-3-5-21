import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoughtItemsPage from './Components/Pages/BoughtItemsPage/BoughtItemsPage'
import ReceivedListPage from './Components/Pages/ReceivedListPage/ReceivedListPage'
import TabNavigator from './Components/Pages/Shared/TabNavigator'
import './App.css';

function App() {

  return (
      <BrowserRouter>
        <div className="app">
            <TabNavigator />
            <Switch>
                <Route path="/receivedListPage">
                    <ReceivedListPage />
                </Route>
                <Route path='/'>
                    <BoughtItemsPage />
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App;
