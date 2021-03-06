import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import BoughtItems from '../BoughtItems/BoughtItems'
import BoughtItemsStore from '../BoughtItemsStore/BoughtItemsStore'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function BoughtItemsPage() {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    function renderView(tab) {
        
    }

    return (
        <div>
            <h3>Hellow from BoughtItemsPage</h3>
            <button onClick={() => setSelectedTab("ITEM_LIST")}>VIEW ITEM LIST</button>
            <button onClick={() => setSelectedTab("STORE_LIST")}>VIEW STORE LIST</button>
            {selectedTab === "ITEM_LIST" ? <BoughtItems /> : <BoughtItemsStore /> }
        </div>
    )
}
