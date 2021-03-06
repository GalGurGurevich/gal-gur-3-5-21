import React, { useState } from 'react';
import { addItem } from '../../../redux/itemStoreSlice';
import { connect } from 'react-redux';
import './ItemCreator.css';

function ItemCreator({ addItem, id }) {
    const [name, setName] = useState('');
    const [store, setStore] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');

    function addCurrentItem() {
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
    }

    return (
        <div className='item-creator-container'>
            <div className='labels'>Product Name:</div>
            <input type='text' onChange={e => setName(e.target.value)} value={name}/>
            <div className='labels'>Bought In Store:</div>
            <input type='text' onChange={e => setStore(e.target.value)} value={store}/>
            <div className='labels'>Price Paid:</div>
            <input type='number' onChange={e => setPrice(+e.target.value)} value={price}/>
            <div className='labels'>Will Arive At:</div>
            <input type='date' onChange={e => setDate(e.target.value)} value={date}/>
            <button onClick={() => addCurrentItem()}>ADD ITEM</button>
        </div>
    );
}

const mapStateToProps = state => ({
    id: state.userItemCart.itemIDCounter,
});

const mapDispatchToProps = {
    addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);
