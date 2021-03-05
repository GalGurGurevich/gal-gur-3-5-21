import React, {useState} from 'react'
import { connect } from 'react-redux'

function Item({name, store, price, date, dollarToShekel}) {

    const [showShekel, setShowShekel] = useState(false);

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
        </div>
    )
}

const mapStateToProps = (state) => ({
    dollarToShekel: state.userItemCart.dollarToShekel,
})

export default connect(
    mapStateToProps, null
)(Item);
