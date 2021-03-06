import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoughtItemsPage from './Components/Pages/BoughtItemsPage/BoughtItemsPage'
import ReceivedListPage from './Components/Pages/ReceivedListPage/ReceivedListPage'
import TabNavigator from './Components/Pages/Shared/TabNavigator/TabNavigator'
import { connect } from 'react-redux'
import { getCurrenyRates } from './Components/Pages/itemStoreSlice'
import './App.css';

function App({getCurrenyRates, timeInterval, apiError}) {

    useEffect(() => {
        getCurrenyRates();
        setInterval(function(){ 
            getCurrenyRates()
        }, timeInterval);
    },[])

    useEffect(() => {
        if(apiError === true) {
            alert("Error! sorry server possibly down or currently unavailble, try again later...");
        }
    },[apiError])

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

const mapStateToProps = (state) => ({
    timeInterval: state.userItemCart.delayTimeBetweenAPICall,
    apiError: state.userItemCart.apiError
})

const mapDispatchToProps = {
    getCurrenyRates
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);
