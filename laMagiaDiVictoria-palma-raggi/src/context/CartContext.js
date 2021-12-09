import React, { useState, createContext } from 'react'
// import React, { useState, createContext, useContext} from 'react'


//Export Context
export const CartContext = createContext()

// export const useCartContext = () => useContext(CartContext)

//Context Provider
export const CartProvider = ({ children })  => {
    const [itemCard, setItemCard] = useState([])
   
    console.log("Item:[",itemCard,"]");

    return (
        <CartContext.Provider value={{ itemCard, setItemCard }}> 
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;