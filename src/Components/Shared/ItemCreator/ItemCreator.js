import React, { useState } from 'react';
import { addItem } from '../../../redux/itemStoreSlice';
import { connect } from 'react-redux';
import translator from '../../../Helpers/translator'
import './ItemCreator.css';

function ItemCreator({ addItem, id, lang }) {

    const [name, setName] = useState('');
    const [store, setStore] = useState('');
    const [price, setPrice] = useState(0);
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
            <div className='labels'>{translator(lang, 'itemNameLabel')}</div>
            <input className="inputs" type='text' onChange={e => setName(e.target.value)} value={name}/>
            <div className='labels'>{translator(lang, 'itemCompanyLabel')}</div>
            <input className="inputs" type='text' onChange={e => setStore(e.target.value)} value={store}/>
            <div className='labels'>{translator(lang, 'itemPriceLabel')}</div>
            <input className="inputs" type='number' onChange={e => setPrice(+e.target.value)} value={price}/>
            <div className='labels'>{translator(lang, 'itemDateLabel')}</div>
            <input className="inputs" type='date' onChange={e => setDate(e.target.value)} value={date}/>
            <button className="add-item-btn" onClick={() => addCurrentItem()}>{translator(lang, 'itemAddBtn')}</button>
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
