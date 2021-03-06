import React from 'react';
import { groupBy, groupCompnayAndSum } from '../../../../Helpers/aggregator';
import './BoughtItemsStore.css';

export default function BoughtItemsStore({ itemsInStore }) {

    const groups = groupBy(itemsInStore, 'store');
    const aggregatedStore = groupCompnayAndSum(groups);

    function displayStore() {
        const storeData = aggregatedStore.map((item, idx) => (
            <div key={idx} className='storeData-box'>
                <div>Store Name: {item.store}</div>
                <div>Total Ravenue: {item.totalSum}$</div>
            </div>
        ));
        return storeData;
    }

    return (
        <>
            <h3 className='boughtItemsStore-header'>Bought Items Store</h3>
            {displayStore()}
        </>
    );
}

