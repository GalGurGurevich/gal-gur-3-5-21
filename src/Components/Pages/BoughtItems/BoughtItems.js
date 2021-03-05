import React from 'react'
import { connect } from 'react-redux'
import ItemCreator from '../Shared/ItemCreator'

function BoughtItems(items) {

    function displayAllItems() {
        const itemsList = items.map((item, index) =>
            <li key={index}>
              {item.name}
            </li>
        );
        return itemsList
    }

    return (
        <>
            <ItemCreator />
            {/* {displayAllItems()} */}
        </>
    )
}

const mapStateToProps = (state) => {
    //items: state.itemStore.items
}

export default connect(
    mapStateToProps, null
)(BoughtItems);
