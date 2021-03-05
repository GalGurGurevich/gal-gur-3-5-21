import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ItemCreator from '../Shared/ItemCreator'
import { getCurrenyRates } from '../itemStoreSlice'

function BoughtItems({itemsInStore, getCurrenyRates, timeInterval, dollarToShekel}) {

    const [showShekel, setShowShekel] = useState(false);

    useEffect(() => {
        setTimeout(getCurrenyRates(), timeInterval);
    },[])

    function displayAllItems() {
        const listItems = itemsInStore.map((item, idx) =>
            <div key={idx}>
                <div>{item.name}</div>
                <div>{item.store}</div>
                <div>{item.price}$</div><button onClick={() => setShowShekel(!showShekel)}>ILS</button>
                <div>{item.date}</div>
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
