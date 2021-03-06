import React, {useState} from 'react'
import { connect } from 'react-redux'
import { receiveItem } from '../itemStoreSlice'

function Item({id , name, store, price, date, dollarToShekel, receiveItem}) {
    const [showShekel, setShowShekel] = useState(false);
    const currentItem = { id: id, name: name, store: store, price: price, deliveryAt: date };

    function displayPrice(price) {
        return showShekel ? price * dollarToShekel : price
     }
 
    function displayCashSymbol() {
       return showShekel ? '₪' : '$' 
    }

    return (
        <div>
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
