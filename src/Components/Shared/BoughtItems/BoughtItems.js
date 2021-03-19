import React from 'react'
import ItemCreator from '../ItemCreator/ItemCreator'
import Item from '../Item/Item'
import translator from '../../../Helpers/translator'
import { connect } from 'react-redux'
import './BoughtItems.css'

function BoughtItems({ itemsInStore, shouldDisplayCreator, canReceive, lang }) {

    function displayAllItems() {
        const listItems = itemsInStore.map((item, idx) =>
            <div key={idx} className="list-item-container">
                <Item 
                id = {item.id}
                name={item.name} 
                store={item.store}
                price={item.price}
                date={item.deliveryAt}
                canReceive={canReceive}
                 />
            </div>
        )
        return listItems;
    }

    return (
        <>
            { shouldDisplayCreator ? <ItemCreator /> : null }
            <br />
            {itemsInStore.length === 0 ? <div className="msg-container"><span className="msg-span">{translator(lang, 'nothingToDisplayMsg')}</span></div> : <div className="all-items-bottom-container">{displayAllItems()}</div>}
        </>
    )
}

const mapStateToProps = (state) => ({
    lang: state.userItemCart.language
})

export default connect(
    mapStateToProps, null
)(BoughtItems);
