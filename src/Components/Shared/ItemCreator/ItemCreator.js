import React, { useState } from 'react';
import { addItem } from '../../../redux/itemStoreSlice';
import { connect } from 'react-redux';
import SecondryButton from '../PagesCommonParts/Button/SeconderyButton'
import InputFields from './ItemForm';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import translator from '../../../Helpers/translator'
import './ItemCreator.css';

function ItemCreator({ addItem, id, lang }) {

    localStorage.setItem('items', JSON.stringify([]));

    const [name, setName] = useState('');
    const [store, setStore] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [itemAdded, setItemAdded] = useState(false);

    function addCurrentItem() {
        setItemAdded(true);
        if(name === "" || store === "" || date === "") return;
        const item = { id: id, name: name, store: store, price: price, deliveryAt: date };
        addItem(item);
        resetStates();
    }

    function resetStates() {
        setName('');
        setStore('');
        setPrice('');
        setDate('');
        setItemAdded(false);
    }

    function errorMsg() {
        if(name === "") {
            return <span className="error-msg">{translator(lang, 'errorDisplayItemName')}</span>
        }
        if(store === "") {
            return <span className="error-msg">{translator(lang, 'errorDisplayStoreName')}</span>
        }
        if(date === "") {
            return <span className="error-msg">{translator(lang, 'errorDisplayDateName')}</span>
        }
    }

    const theme = createMuiTheme({
        direction: 'rtl',
      });

    const seconderyTheme = createMuiTheme({
      direction: 'ltr',
    });

    return (
        <>
            <ThemeProvider theme={lang === "HEB" ? theme : seconderyTheme}>
                <div className='item-creator-container'>
                    <InputFields 
                    setName={setName}
                    setStore={setStore}
                    setPrice={setPrice}
                    setDate={setDate}
                    nameLbl={translator(lang, 'itemNameLabel')}
                    storeLbl={translator(lang, 'itemCompanyLabel')}
                    priceLbl={translator(lang, 'itemPriceLabel')}
                    dateLbl={translator(lang, 'itemDateLabel')}
                    name={name}
                    store={store}
                    price={price}
                    date={date}
                    />
                    <SecondryButton func={addCurrentItem} txt={translator(lang, 'itemAddBtn')}></SecondryButton>
                </div>
                {itemAdded ? errorMsg() : null }
            </ThemeProvider>
        </>
    );
}

const mapStateToProps = state => ({
    id: state.userItemCart.itemIDCounter,
    lang: state.userItemCart.language
});

const mapDispatchToProps = {
    addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);
