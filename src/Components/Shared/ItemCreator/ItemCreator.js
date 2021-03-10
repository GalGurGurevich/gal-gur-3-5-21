import React, { useState } from 'react';
import { addItem } from '../../../redux/itemStoreSlice';
import { connect } from 'react-redux';
import './ItemCreator.css';

function ItemCreator({ addItem, id }) {

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
            return <span className="error-msg">Oops, You missing product Name...</span>
        }
        if(store === "") {
            return <span className="error-msg">Oops, You missing store Name...</span>
        }
        if(date === "") {
            return <span className="error-msg">Oops, You missing date when the product should arrive...</span>
        }
    }

    return (
        <>
        <div className='item-creator-container'>
            <div className='labels'>Product Name:</div>
            <input className="inputs" type='text' onChange={e => setName(e.target.value)} value={name}/>
            <div className='labels'>Bought In Store:</div>
            <input className="inputs" type='text' onChange={e => setStore(e.target.value)} value={store}/>
            <div className='labels'>Price Paid:</div>
            <input className="inputs" type='number' onChange={e => setPrice(+e.target.value)} value={price}/>
            <div className='labels'>Will Arive At:</div>
            <input className="inputs" type='date' onChange={e => setDate(e.target.value)} value={date}/>
            <button className="add-item-btn" onClick={() => addCurrentItem()}>ADD ITEM</button>
        </div>
        {itemAdded ? errorMsg() : null }
        </>
    );
}

const mapStateToProps = state => ({
    id: state.userItemCart.itemIDCounter,
});

const mapDispatchToProps = {
    addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);
