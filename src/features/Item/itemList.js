import React, { useState } from 'react';
import { Item } from './Item/Item'

export default function itemList() {

    return (
        <div>
            <Item name={"iPhone"} onlineStore={"amazon"} price={1050.99} deliveryDate={"2000-20-10"}/>
            <Item name={"Sumsung"} onlineStore={"eBay"} price={688.50} deliveryDate={"2010-20-10"}/>
        </div>
    )
}
