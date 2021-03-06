import React, { useEffect } from 'react'
import { groupBy, groupCompnayAndSum } from '../../../Helpers/aggregator'
import { getAggregatedStore } from '../itemStoreSlice'
import { connect } from 'react-redux'
import './BoughtItemsStore.css'

function BoughtItemsStore({recivedItems, getAggregatedStore, aggregatedStore}) {
    function aggregateAndDisplaySumByStore() {
        const groups = groupBy(recivedItems, 'store');
        getAggregatedStore(groupCompnayAndSum(groups));
    }

    function displayStore() {
        const storeData = aggregatedStore.map((item, idx) =>
            <div key={idx} className="storeData-box">
                <div>Store Name: {item.store}</div>
                <div>Total Ravenue: {item.totalSum}</div>
            </div>)
        return storeData
    }

    useEffect(() => {
        aggregateAndDisplaySumByStore()
    },[])

    return (
        <>
        <h3 className="boughtItemsStore-header">Bought Items Store</h3>
        {displayStore()}
        </>
    )
}

const mapStateToProps = (state) => ({
    recivedItems: state.userItemCart.recivedItems,
    aggregatedStore: state.userItemCart.aggregatedStore,
})

const mapDispatchToProps = {
    getAggregatedStore
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(BoughtItemsStore);
