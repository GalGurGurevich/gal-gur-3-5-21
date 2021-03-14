import React, { useState } from 'react'
import BoughtItemsStore from '../../Shared/BoughtItemsStore/BoughtItemsStore'
import BoughtItems from '../../Shared/BoughtItems/BoughtItems'
import Header from '../../Shared/PagesCommonParts/Header/Header'
import Button from '../../Shared/PagesCommonParts/Button/Button'
import { connect } from 'react-redux'
import translator from '../../../Helpers/translator'
import './ReceivedListPage.css'

function ReceivedListPage({itemsInStore, lang}) {

    const [selectedTab, setSelectedTab] = useState("ITEM_LIST");

    return (
        <div className="receivedListPage-root">
            <Header txt={translator(lang, "ReceivedListPageHeader")}/>
            {selectedTab === "ITEM_LIST" ? <p className="info-p">כאן תוכלו לצפות במוצרים אשר הזמנתם וקיבלתם</p> : <p className="info-p">כאן רואים את סך כל ההזמנות מכל חנות</p>}
            <Button func={() => setSelectedTab("ITEM_LIST")} txt={"צפייה במוצרים"}/>
            <Button func={() => setSelectedTab("STORE_LIST")} txt={"צפייה לפי חנות"}/>
            {selectedTab === "ITEM_LIST" ? <BoughtItems itemsInStore={itemsInStore} shouldDisplayCreator={false} canReceive={false}/> : <BoughtItemsStore itemsInStore={itemsInStore}/> }
        </div>
    )
}


const mapStateToProps = (state) => ({
    itemsInStore: state.userItemCart.receivedItems,
    lang: state.userItemCart.language
})


export default connect(
    mapStateToProps, null
)(ReceivedListPage);
