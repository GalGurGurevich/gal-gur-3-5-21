import React from 'react'
import ItemCreator from '../ItemCreator/ItemCreator'
import Item from '../Item/Item'
import './BoughtItems.css'

export default function BoughtItems({itemsInStore, shouldDisplayCreator, canReceive}) {

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
            {itemsInStore.length === 0 ? <div className="msg-container"><span className="msg-span">אין מה להציג באמת... ם.ם;</span></div> : <div className="all-items-bottom-container">{displayAllItems()}</div>}
        </>
    )
}
