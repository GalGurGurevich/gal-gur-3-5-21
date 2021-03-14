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
            <Header txt={"עמוד מוצרים שנקנו ובדרך אליכם"}/>
            {selectedTab === "ITEM_LIST" ? <p className="info-p">כאן תוכלו לראות ולהוסיף מוצרים אשר הזמנתם</p> : <p className="info-p">כאן רואים את כל ההזמנות שטרם הגיעו מכל חנות</p>}
            <Button func={() => setSelectedTab("ITEM_LIST")} txt={"צפייה במוצרים"}/>
            <Button func={() => setSelectedTab("STORE_LIST")} txt={"צפייה לפי חנות"}/>
            {selectedTab === "ITEM_LIST" ? <BoughtItems itemsInStore={itemsInStore} shouldDisplayCreator={true} canReceive={true}/> : <BoughtItemsStore itemsInStore={itemsInStore}/> }
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemsInStore: state.userItemCart.items,
    language: state.userItemCart.language
})


export default connect(
    mapStateToProps, null
)(BoughtItemsPage);
