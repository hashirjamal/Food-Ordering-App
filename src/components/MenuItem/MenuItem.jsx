import React, { useContext, useState } from 'react'
import styles from "./menuItem.module.css"
import { cartData } from '../../App';
export default function MenuItem({name,description,price,id}) {

let {setSelectedItem,selectedItem,setModalDisp} = useContext(cartData)
  // console.log()
  const [qty,setQty] = useState(1);

 

let Additem = ()=>{
  let status = false;


  let arr = [...selectedItem]
  arr.forEach((el)=>{
    if(el.id===id){
      el.quantity= Number(el.quantity) + Number(qty);
      status=true;
      return;
    }
  }
)
if(!status){
  arr.push({id,name,price,quantity:qty})
}
  setSelectedItem(arr);
  setModalDisp((prev)=>!prev)
 
}
  return (
    <div className={styles.item}>
        <div className={styles.info}>
            <h4>{name}</h4>
            <p>{description}</p>
            <span>{price}</span>
        </div>
        <div className={styles.actions} >
            <span className={styles.qty}>
            <p>Quantity </p>
            <span><input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} min={1}/></span>
            </span>
            <button onClick={()=>Additem()}>Add</button>
        </div>
    </div>
  )
}
