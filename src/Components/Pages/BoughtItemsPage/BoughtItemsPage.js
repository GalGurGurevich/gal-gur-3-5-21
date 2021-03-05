import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import BoughtItems from '../BoughtItems/BoughtItems'
import BoughtItemsStore from '../BoughtItemsStore/BoughtItemsStore'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function BoughtItemsPage() {
    return (
        <div>
            Hellow from BoughtItemsPage
            <BoughtItems />
        </div>
    )
}
