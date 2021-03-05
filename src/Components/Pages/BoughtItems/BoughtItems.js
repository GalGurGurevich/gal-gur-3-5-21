import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ItemCreator from '../Shared/ItemCreator'
import { getCurrenyRates } from '../itemStoreSlice'
import Item from '../Item/Item'

function BoughtItems({itemsInStore, getCurrenyRates, timeInterval, dollarToShekel}) {

    const [showShekel, setShowShekel] = useState(false);

    useEffect(() => {
        setTimeout(getCurrenyRates(), timeInterval);
    },[])

    function displayPrice(price) {
       return showShekel ? price * dollarToShekel : price
    }

    function displayCashSymbol() {
       return showShekel ? '₪' : '$' 
    }

    function displayAllItems() {
        const listItems = itemsInStore.map((item, idx) =>
            <div key={idx}>
                <Item 
                name={item.name} 
                store={item.store}
                price={item.price}
                date={item.date}
                 />
            </div>
        )
        return listItems;
    }

    return (
        <>
            <ItemCreator />
            <br />
            {displayAllItems()}
        </>
    )
}

const mapStateToProps = (state) => ({
    itemsInStore: state.userItemCart.items,
    dollarToShekel: state.userItemCart.dollarToShekel,
    timeInterval: state.userItemCart.delayTimeBetweenAPICall
})

const mapDispatchToProps = {
    getCurrenyRates
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(BoughtItems);
