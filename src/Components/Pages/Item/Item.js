import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { receiveItem } from '../itemStoreSlice'
import './Item.css'

function Item({id , name, store, price, date, dollarToShekel, receiveItem, apiError}) {
    
    const [showShekel, setShowShekel] = useState(false);
    const currentItem = { id: id, name: name, store: store, price: price, deliveryAt: date };

    useEffect(() => {
        if(apiError === true) {
            console.log("can't convert");
        }
    },[dollarToShekel, apiError])

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
    apiError: state.userItemCart.apiError
})

const mapDispatchToProps = {
    receiveItem
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Item);
