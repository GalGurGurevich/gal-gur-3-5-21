import React, { useState } from 'react';
import { addItem } from '../../../redux/itemStoreSlice';
import { connect } from 'react-redux';
import SecondryButton from '../PagesCommonParts/Button/SeconderyButton'
import InputFields from './ItemForm';
import translator from '../../../Helpers/translator'
import './ItemCreator.css';

function ItemCreator({ addItem, id, lang }) {

    const [name, setName] = useState('');
    const [store, setStore] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');
    const [itemAdded, setItemAdded] = useState(false);

    const itemNameLabel = translator(lang, 'itemNameLabel');
    const itemStoreLabel = translator(lang, 'itemCompanyLabel')
    const itemPriceLabel = translator(lang, 'itemPriceLabel')
    const itemDateLabel = translator(lang, 'itemDateLabel')
    const btnTxt = translator(lang, 'itemAddBtn');

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
        setPrice(0);
        setDate('');
        setItemAdded(false);
    }

    function errorMsg() {
        if(name === "") {
            return <span className="error-msg">אופס, חסר שם מוצר</span>
        }
        if(store === "") {
            return <span className="error-msg">אופס, חסר שם החנות</span>
        }
        if(date === "") {
            return <span className="error-msg">אופס, חסר תאריך הגעה משוער</span>
        }
    }

    return (
        <>
        <div className='item-creator-container'>
            <InputFields 
            setName={setName}
            setStore={setStore}
            setPrice={setPrice}
            setDate={setDate}
            nameLbl={itemNameLabel}
            storeLbl={itemStoreLabel}
            priceLbl={itemPriceLabel}
            dateLbl={itemDateLabel}
            name={name}
            store={store}
            price={price}
            date={date}
            />
            <SecondryButton func={addCurrentItem} txt={btnTxt}></SecondryButton>
        </div>
        {itemAdded ? errorMsg() : null }
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
