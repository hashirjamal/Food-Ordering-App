import React, { useContext, useState } from 'react'
import styles from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {cartData} from "../../App"



export default function Header({openCart}) {
  const [modalDisp,setModalDisp] = useState(false);
  const {selectedItem} = useContext(cartData);
  let items = [...selectedItem]
  return (
    <div className={styles.navbar}>
        <h1>React Meals</h1>
        <button className={styles.cartDiv} onClick={()=>openCart((prev)=>!prev)}>
            <FontAwesomeIcon icon={faCartShopping} />    
           <p>
           Your Cart
            </p> 
           <p>
           {items.length-1}
            </p> 
        </button>
    </div>
  )
}
