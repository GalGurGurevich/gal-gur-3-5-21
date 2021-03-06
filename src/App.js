import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BoughtItemsPage from './Components/Pages/BoughtItemsPage/BoughtItemsPage';
import ReceivedListPage from './Components/Pages/ReceivedListPage/ReceivedListPage';
import TabNavigator from './Components/Shared/TabNavigator/TabNavigator';
import { connect } from 'react-redux';
import { getCurrenyRates } from './redux/itemStoreSlice';
import Footer from '../src/Components/Shared/Footer/Footer';
import './App.css';

function App({ getCurrenyRates, timeInterval }) {
    useEffect(() => {
        getCurrenyRates();
        const interval = setInterval(getCurrenyRates, timeInterval);

        return () => clearInterval(interval);
    }, [getCurrenyRates, timeInterval]);

    return (
        <BrowserRouter>
            <div className='app'>
                <TabNavigator />
                <Switch>
                    <Route path='/receivedListPage'>
                        <ReceivedListPage />
                    </Route>
                    <Route path='/boughtItemsPage'>
                        <BoughtItemsPage />
                    </Route>
                    <Route path="/" exact>
                        <Redirect to="/boughtItemsPage" />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = state => ({
    timeInterval: state.userItemCart.delayTimeBetweenAPICall,
});

const mapDispatchToProps = {
    getCurrenyRates,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
