import React, { useState } from 'react'
import BoughtItems from '../../Shared/BoughtItems/BoughtItems'
import BoughtItemsStore from '../../Shared/BoughtItemsStore/BoughtItemsStore'
import Header from '../../Shared/PagesCommonParts/Header/Header'
import Button from '../../Shared/PagesCommonParts/Button/Button'
import { connect } from 'react-redux'
import './BoughtItemsPage.css'

function BoughtItemsPage({itemsInStore}) {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="boughtItemsPage-root">
            <Header txt={"Your Bought Items"}/>
            <Button func={() => setSelectedTab("ITEM_LIST")} txt={"VIEW ITEM LIST"}/>
            <Button func={() => setSelectedTab("STORE_LIST")} txt={"VIEW STORE LIST"}/>
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
