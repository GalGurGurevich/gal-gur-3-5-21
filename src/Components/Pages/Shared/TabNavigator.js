import React from 'react'
import { Link } from "react-router-dom";

export default function TabNavigator() {
    return (
        <div className="topnav">
          <ul>
            <Link to="/">BoughtItemsPage</Link>
            <Link to="/receivedListPage">ReceivedListPage</Link>
          </ul>
        </div>
    )
}
