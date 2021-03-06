import React, { useState } from 'react'

export default function ReceivedListPage() {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="receivedListPage-root">
            <h3 className="receivedListPage-header">Hellow from BoughtItemsPage</h3>
            <button className="receivedListPage-btn" onClick={() => setSelectedTab("ITEM_LIST")}>VIEW ITEM LIST</button>
            <button className="receivedListPage-btn" onClick={() => setSelectedTab("STORE_LIST")}>VIEW STORE LIST</button>
            {selectedTab === "ITEM_LIST" ? <div>A</div> : <div>B</div> }
        </div>
    )
}
