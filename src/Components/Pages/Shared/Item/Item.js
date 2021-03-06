import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { receiveItem } from '../../itemStoreSlice'
import './Item.css'

function Item({id , name, store, price, date, dollarToShekel, receiveItem}) {
    
    const [showShekel, setShowShekel] = useState(false);
    const currentItem = { id: id, name: name, store: store, price: price, deliveryAt: date };

    useEffect(() => {

    },[dollarToShekel])

    function displayPrice(price) {
        return showShekel ? (price * dollarToShekel).toFixed(2) : price
     }
 
    function displayCashSymbol() {
       return showShekel ? '₪' : '$' 
    }

    return (
        <div className="item-box">
            <div>{name}</div>
            <div>{store}</div>
            <div>{displayPrice(price)}{displayCashSymbol()}</div><button onClick={() => setShowShekel(!showShekel)}>CHANGE CURRENCY</button>
            <div>{date}</div>
            <button onClick={() => receiveItem(currentItem)}>Received</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    dollarToShekel: state.userItemCart.dollarToShekel,
})

const mapDispatchToProps = {
    receiveItem
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Item);
