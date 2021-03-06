import React, { useState } from 'react'
import BoughtItems from '../Shared/BoughtItems/BoughtItems'
import BoughtItemsStore from '../Shared/BoughtItemsStore/BoughtItemsStore'
import './BoughtItemsPage.css'

export default function BoughtItemsPage() {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="boughtItemsPage-root">
            <h3 className="boughtItemsPage-header">Hellow from BoughtItemsPage</h3>
            <button className="boughtItemsPage-btn" onClick={() => setSelectedTab("ITEM_LIST")}>VIEW ITEM LIST</button>
            <button className="boughtItemsPage-btn" onClick={() => setSelectedTab("STORE_LIST")}>VIEW STORE LIST</button>
            {selectedTab === "ITEM_LIST" ? <BoughtItems shouldDisplayCreator={true}/> : <BoughtItemsStore /> }
        </div>
    )
}
