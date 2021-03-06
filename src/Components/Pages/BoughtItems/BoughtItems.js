import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ItemCreator from '../Shared/ItemCreator'
import { getCurrenyRates } from '../itemStoreSlice'
import Item from '../Item/Item'

function BoughtItems({itemsInStore, getCurrenyRates, timeInterval}) {

    useEffect(() => {
        setTimeout(getCurrenyRates(), timeInterval);
    },[])

    function displayAllItems() {
        const listItems = itemsInStore.map((item, idx) =>
            <div key={idx}>
                <Item 
                id = {item.id}
                name={item.name} 
                store={item.store}
                price={item.price}
                date={item.deliveryAt}
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
