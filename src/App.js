import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BoughtItemsPage from './Components/Pages/BoughtItemsPage/BoughtItemsPage';
import ReceivedListPage from './Components/Pages/ReceivedListPage/ReceivedListPage';
import TabNavigator from './Components/Shared/TabNavigator/TabNavigator';
import { connect } from 'react-redux';
import { getCurrenyRates } from './redux/itemStoreSlice';
import Footer from '../src/Components/Shared/Footer/Footer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

function App({ getCurrenyRates, timeInterval, apiError, lang }) {

    useEffect(() => {
        getCurrenyRates();
        const interval = setInterval(getCurrenyRates, timeInterval);

        return () => clearInterval(interval);
    }, [getCurrenyRates, timeInterval]);

    const theme = createMuiTheme({
        direction: 'rtl',
      });

    const seconderyTheme = createMuiTheme({
      direction: 'ltr',
    });

    return (
        <ThemeProvider theme={lang === "HEB" ? theme : seconderyTheme}>
            <BrowserRouter>
                <div className={`app${lang === "HEB" ? ' heb' : ''}`}>
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
                    <Footer apiError={apiError} />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

const mapStateToProps = state => ({
    timeInterval: state.userItemCart.delayTimeBetweenAPICall,
    apiError: state.userItemCart.apiError,
    lang: state.userItemCart.language
});

const mapDispatchToProps = {
    getCurrenyRates,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
