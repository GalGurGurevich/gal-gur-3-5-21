import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  selectTotal,
} from '../itemStoreSlice';
import './Item.css'

export function Item({name, onlineStore, price, deliveryDate}) {
  
  const currentItem = { name, onlineStore, price, deliveryDate };
  const dispatch = useDispatch();

  return (
    <div className="itemContainer" onClick={() => dispatch(addItem(currentItem))}>
      <div>
          {name}
      </div>
      <div>
          {onlineStore}
      </div>
      <div>
          {price}
      </div>
      <div>
          {deliveryDate}
      </div>
    </div>
  )
}
