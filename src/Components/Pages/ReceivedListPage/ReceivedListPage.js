import React, { useState } from 'react'
import BoughtItemsStore from '../../Shared/BoughtItemsStore/BoughtItemsStore'
import BoughtItems from '../../Shared/BoughtItems/BoughtItems'
import { connect } from 'react-redux'
import './ReceivedListPage.css'

function ReceivedListPage({itemsInStore}) {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="receivedListPage-root">
            <h3 className="receivedListPage-header">Hello from ReceivedListPage</h3>
            <button className="receivedListPage-btn" onClick={() => setSelectedTab("ITEM_LIST")}>VIEW ITEM LIST</button>
            <button className="receivedListPage-btn" onClick={() => setSelectedTab("STORE_LIST")}>VIEW STORE LIST</button>
            {selectedTab === "ITEM_LIST" ? <BoughtItems itemsInStore={itemsInStore} shouldDisplayCreator={false} canReceive={false}/> : <BoughtItemsStore itemsInStore={itemsInStore}/> }
        </div>
    )
}


const mapStateToProps = (state) => ({
    itemsInStore: state.userItemCart.receivedItems
})


export default connect(
    mapStateToProps, null
)(ReceivedListPage);
