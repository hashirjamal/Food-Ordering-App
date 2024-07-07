import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Welcome from './components/welcome-note/Welcome'
import MenuItem from './components/MenuItem/MenuItem'
import MenuBox from "./components/menu/MenuBox"
import PortalCont from './components/BG/PortalCont'
import Cart from "./components/cart-modal/Cart"
export const cartData = createContext(null);  
function App() {
  let [modalDisp,setModalDisp] = useState(false)

  const [selectedItem,setSelectedItem] = useState([
    {
      id:"",
      name:"",
      price:0,
quantity:0,
    }
  ])

 

  return (
    <>
      <cartData.Provider value={{selectedItem,setSelectedItem,setModalDisp}} >

      {modalDisp&& <Cart openCart={setModalDisp} />}
      <Header openCart={setModalDisp}/>
      <PortalCont>
      <div className="bg-img">
        <img src="https://privatechefdirect.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-04-21.54.51-An-elegant-dinner-party-setting-with-a-focus-on-exquisite-side-dishes.-The-table-is-adorned-with-fine-china-crystal-glassware-and-silver-cutlery.-In.webp" alt="food-images" />
      </div>

      </PortalCont>
      
      <Welcome />

      
      <MenuBox />
      </cartData.Provider>
    </>
  )
}

export default App
