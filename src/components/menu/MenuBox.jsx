import React, { useState } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import styles from "./menuBox.module.css"
import { dishList } from './dishes';
export default function MenuBox() {

  const [dishes, setDishes] =  useState(dishList);


  return (
    <div className={styles.menuBox}>
      {dishes.map((v,i)=>{
        return <MenuItem key={v.id} {...v}  />
      })}
       
    </div>
  )
}
