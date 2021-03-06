import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { receiveItem } from '../../itemStoreSlice'
import './Item.css'

function Item({id , name, store, price, date, dollarToShekel, receiveItem, canReceive }) {
    
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
            <div className="item-feild">{name}</div>
            <div className="item-feild">{store}</div>
            <div className="item-feild">{displayPrice(price)}{displayCashSymbol()}</div><button onClick={() => setShowShekel(!showShekel)}>CHANGE CURRENCY</button>
            <div className="item-feild">{date}</div>
            {canReceive ? <button onClick={() => receiveItem(currentItem)}>Received</button> : null }
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
