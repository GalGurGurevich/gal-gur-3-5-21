import React, { useState } from 'react'
import BoughtItemsStore from '../BoughtItemsStore/BoughtItemsStore'
import BoughtItems from '../BoughtItems/BoughtItems'
import './ReceivedListPage.css'

export default function ReceivedListPage() {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="receivedListPage-root">
            <h3 className="receivedListPage-header">Hellow from ReceivedListPage</h3>
            <button className="receivedListPage-btn" onClick={() => setSelectedTab("ITEM_LIST")}>VIEW ITEM LIST</button>
            <button className="receivedListPage-btn" onClick={() => setSelectedTab("STORE_LIST")}>VIEW STORE LIST</button>
            {selectedTab === "ITEM_LIST" ? <BoughtItems shouldDisplayCreator={false}/> : <BoughtItemsStore /> }
        </div>
    )
}
