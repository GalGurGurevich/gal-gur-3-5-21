import React, { useState } from 'react'
import BoughtItemsStore from '../../Shared/BoughtItemsStore/BoughtItemsStore'
import BoughtItems from '../../Shared/BoughtItems/BoughtItems'
import Header from '../../Shared/PagesCommonParts/Header/Header'
import Button from '../../Shared/PagesCommonParts/Button/Button'
import { connect } from 'react-redux'
import './ReceivedListPage.css'

function ReceivedListPage({itemsInStore}) {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="receivedListPage-root">
            <Header txt={"Your Received Itmes"}/>
            <Button func={() => setSelectedTab("ITEM_LIST")} txt={"VIEW ITEM LIST"}/>
            <Button func={() => setSelectedTab("STORE_LIST")} txt={"VIEW STORE LIST"}/>
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
