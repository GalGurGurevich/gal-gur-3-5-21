import React from 'react'
import { Link } from "react-router-dom";
import './TabNavigator.css'

export default function TabNavigator() {
    return (
        <div className="tabNavigator-root">
          <ul className="tab-ul">
            <Link className="link" to="/boughtItemsPage">BoughtItemsPage</Link>
            <Link className="link" to="/receivedListPage">ReceivedListPage</Link>
          </ul>
        </div>
    )
}
