import React, { useEffect } from 'react'
import { groupBy, groupCompnayAndSum } from '../../../Helpers/aggregator'
import { getAggregatedStore } from '../itemStoreSlice'
import { connect } from 'react-redux'

function BoughtItemsStore({itemsInStore, getAggregatedStore, itemsInAggregatedStore}) {
    function aggregateAndDisplaySumByStore() {
        const groups = groupBy(itemsInStore, 'store');
        getAggregatedStore(groupCompnayAndSum(groups));
    }

    function displayStore() {
        const storeData = itemsInAggregatedStore.map((item, idx) =>
            <div key={idx}>
                <div>{item.store}</div>
                <div>{item.totalSum}</div>
            </div>)
        return storeData
    }

    useEffect(() => {
        aggregateAndDisplaySumByStore()
    },[])

    return (
        <>
        <div>BoughtItemsStore</div>
        {displayStore()}
        </>
    )
}

const mapStateToProps = (state) => ({
    itemsInStore: state.userItemCart.recivedItems,
    itemsInAggregatedStore: state.userItemCart.aggregatedStore,
})

const mapDispatchToProps = {
    getAggregatedStore
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(BoughtItemsStore);
