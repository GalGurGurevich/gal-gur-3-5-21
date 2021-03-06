import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ItemCreator from '../Shared/ItemCreator/ItemCreator'
import { getCurrenyRates } from '../itemStoreSlice'
import Item from '../Item/Item'
import './BoughtItems.css'

function BoughtItems({itemsInStore, getCurrenyRates, timeInterval, dollarToShekel, shouldDisplayCreator}) {

    useEffect(() => {
        // first run only
        getCurrenyRates();
    },[])

    useEffect(() => {
        setInterval(function(){ 
            getCurrenyRates()
        }, timeInterval);
    },[dollarToShekel])

    function displayAllItems() {
        const listItems = itemsInStore.map((item, idx) =>
            <div key={idx} className="list-item-container">
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
            { shouldDisplayCreator ? <ItemCreator /> : null }
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
