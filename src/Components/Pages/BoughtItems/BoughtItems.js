import React from 'react'
import { connect } from 'react-redux'
import ItemCreator from '../Shared/ItemCreator'

function BoughtItems({itemsInStore}) {

    function displayAllItems() {
        const listItems = itemsInStore.map((item, idx) =>
            <div key={idx}>
                <div>{item.name}</div>
                <div>{item.store}</div>
                <div>{item.price}</div>
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
    itemsInStore: state.userItemCart.items
})

export default connect(
    mapStateToProps, null
)(BoughtItems);
