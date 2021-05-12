import React, { useState } from 'react'
import { connect } from 'react-redux'
import { receiveItem } from '../../../redux/itemStoreSlice'
import translator from '../../../Helpers/translator'
import './Item.css'

function Item({id , name, store, price, date, dollarToShekel, receiveItem, canReceive, apiError, lang }) {
    
    const [showShekel, setShowShekel] = useState(false);
    const currentItem = { id: id, name: name, store: store, price: price, deliveryAt: date };

    function displayPrice(price) {
        if(apiError === true) {
            return price;
        }
        return showShekel ? (Number(price) * Number(dollarToShekel)).toFixed(2) : price
     }
 
    function displayCashSymbol() {
        if(apiError === true) {
            return '€';
        }
       return showShekel ? '₪' : '€'; 
    }

    return (
        <div className="item-box">
            <div className="item-feild">{name}</div>
            <div className="item-feild">{store}</div>
            <div className="item-feild">{displayPrice(price)}{displayCashSymbol()}</div><button disabled={apiError} onClick={() => setShowShekel(!showShekel)}>{translator(lang, 'changeCurrencyText')}</button>
            <div className="item-feild">{date}</div>
            {canReceive ? <button onClick={() => receiveItem(currentItem)}>{translator(lang, 'itemBtn')}</button> : null }
        </div>
    )
}

const mapStateToProps = (state) => ({
    dollarToShekel: state.userItemCart.dollarToShekel.rates.ILS,
    apiError: state.userItemCart.apiError,
    lang: state.userItemCart.language
})

const mapDispatchToProps = {
    receiveItem
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Item);
