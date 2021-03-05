import React, { useState } from 'react'
import randomPriceGenerator from '../../../Helpers/randomPriceGenerator'
import randomDateGenerator from '../../../Helpers/randomDateGenerator'
import { addItem } from '../itemStoreSlice'
import { connect } from 'react-redux'

function ItemCreator({ addItem }) {

    const [name, setName] = useState("");
    const [store, setStore] = useState("");
    const minPrice = 1;
    const maxPrice = 5001;
    const price = randomPriceGenerator(minPrice, maxPrice);
    const date = randomDateGenerator();

    function addCurrentItem() {
        const item = { name, store, price, date };
        addItem(item);
    }

    return (
        <div>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label>Store</label>
            <input type="text" onChange={(e) => setStore(e.target.value)}/>
            <button onClick={() => addCurrentItem()}>ADD ITEM</button>
        </div>
    )
}

// const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = {
    addItem
}

export default connect(
  null, mapDispatchToProps
)(ItemCreator);
