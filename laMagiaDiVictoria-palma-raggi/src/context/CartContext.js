import React, { useState, createContext, useContext} from 'react'

//Export Context
export const CartContext = createContext()

// export const useCartContext = () => useContext(CartContext)

//Context Provider
function CartContextProvider({param}) {
    const [itemCard, setItemCard] = useState([])
   
    console.log("Item:[",itemCard,"]");

    return (
        <CartContext.Provider value={{ itemCard, setItemCard }}> 
            { param }
        </CartContext.Provider>
    )
}

export default CartContextProvider;