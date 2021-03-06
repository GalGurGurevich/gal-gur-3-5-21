import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ItemCreator from '../ItemCreator/ItemCreator'
import { getCurrenyRates } from '../../itemStoreSlice'
import Item from '../Item/Item'
import './BoughtItems.css'

function BoughtItems({itemsInStore, getCurrenyRates, timeInterval, dollarToShekel, shouldDisplayCreator, apiError}) {

    useEffect(() => {
        getCurrenyRates();
        setInterval(function(){ 
            getCurrenyRates()
        }, timeInterval);
    },[])

    useEffect(() => {
        if(apiError === true) {
            alert("Error! sorry server possibly down or currently unavailble, try again later...");
        }
    },[apiError])

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
    timeInterval: state.userItemCart.delayTimeBetweenAPICall,
    apiError: state.userItemCart.apiError
})

const mapDispatchToProps = {
    getCurrenyRates
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(BoughtItems);
