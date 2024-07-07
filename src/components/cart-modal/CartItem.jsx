import React, { useContext,useState } from 'react'
import styles from "./cart-item.module.css"
import { cartData } from '../../App';
export default function CartItem({data}) {
  let {setSelectedItem,selectedItem } = useContext(cartData);
  // console.log("props",props)
  let {name,price,quantity,id} = data;
  const [itemData,setItemData ] = useState({
    name,price,quantity  })
    let onQtyChange = (e,op)=>{
      e.stopPropagation();
      // console.log(op);
      let dt = [...selectedItem];
      let ind;
      dt.forEach((el,i)=>{
        if(el.id == id){
          ind = i;
        }
      })
      switch(op){
        case "+":
          console.log(dt[ind])
          dt[ind].quantity++;
          setItemData(prev=>{return{...prev,quantity:prev.quantity+1}})
          break;
          case "-":
            if(dt[ind].quantity>1){
              dt[ind].quantity--;
              setItemData(prev=>{return{...prev,quantity:prev.quantity-1}})
            }
            else{
              dt.splice(ind,1);
            }
            break ;

          }
          // console.log(dt," -- pp");
          setSelectedItem(dt);        
    }
  return (
    <div className={styles.item}>
        <div className={styles.itemInfo}>
            <h3>{itemData.name}</h3>
            <span><p>{itemData.price}</p>
            <p>x{itemData.quantity}</p>
            </span>

        </div>
        <div className={styles['set-qty']}>
            <button onClick={(e)=>onQtyChange(e,"-")}>-</button><button onClick={(e)=>onQtyChange(e,"+")} >+</button>
        </div>
    </div>
  )
}
