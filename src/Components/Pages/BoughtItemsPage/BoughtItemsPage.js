import React, { useState } from 'react'
import BoughtItems from '../../Shared/BoughtItems/BoughtItems'
import BoughtItemsStore from '../../Shared/BoughtItemsStore/BoughtItemsStore'
import { connect } from 'react-redux'
import './BoughtItemsPage.css'

function BoughtItemsPage({itemsInStore}) {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="boughtItemsPage-root">
            <h3 className="boughtItemsPage-header">Hello from BoughtItemsPage</h3>
            <button className="boughtItemsPage-btn" onClick={() => setSelectedTab("ITEM_LIST")}>VIEW ITEM LIST</button>
            <button className="boughtItemsPage-btn" onClick={() => setSelectedTab("STORE_LIST")}>VIEW STORE LIST</button>
            {selectedTab === "ITEM_LIST" ? <BoughtItems itemsInStore={itemsInStore} shouldDisplayCreator={true} canReceive={true}/> : <BoughtItemsStore itemsInStore={itemsInStore}/> }
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemsInStore: state.userItemCart.items
})


export default connect(
    mapStateToProps, null
)(BoughtItemsPage);
