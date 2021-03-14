import React from 'react';
import { groupBy, groupCompnayAndSum } from '../../../Helpers/aggregator';
import './BoughtItemsStore.css';

export default function BoughtItemsStore({ itemsInStore }) {

    const groups = groupBy(itemsInStore, 'store');
    const aggregatedStore = groupCompnayAndSum(groups);

    function displayStore() {
        const storeData = aggregatedStore.map((item, idx) => (
            <div key={idx} className='storeData-box'>
                <div>שם החנות: {item.store}</div>
                <div>סך קניות: {item.totalSum}$</div>
            </div>
        ));
        return storeData;
    }

    return (
        <>
            <h3 className='boughtItemsStore-header'>רשימת סך הקניות לפי חנות</h3>
            {itemsInStore.length === 0 ? <p className="p-txt-no-items">אין מה להציג באמת... ם.ם;</p> : displayStore()}
        </>
    );
}

