import React, { useContext, useState } from 'react'
import styles from "./cart.module.css"
import CartItem from './CartItem'
import { cartData } from '../../App'
export default function Cart({openCart}) {
    let {selectedItem,setSelectedItem} = useContext(cartData);
    let closeCart = async ()=>{
     await openCart(prev=>!prev);
    
    }

  return (
    <div className={` ${styles.cartBox}`} onClick = {()=>closeCart()} >
      <div className={` ${styles.modal}`} >
        {selectedItem.length>1&& selectedItem.map((v,i)=>{
          if(i!=0)
          return <CartItem data={v} key={v.id}/>
        })}
        {/* <CartItem />
        <CartItem />
        <CartItem /> */}
        {

selectedItem.length>1? <div className={styles.btnDiv}> 
          <button  onClick={()=>console.log("order placed")} >Order</button><button onClick={()=>console.log("Closed")} >Cancel</button>
          </div>
          :
          <div className={styles.empty}>
            Cart is empty...
          </div>
        }
      </div>
    </div>
  )
}
