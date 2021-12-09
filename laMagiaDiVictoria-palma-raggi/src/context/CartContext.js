import {useState, createContext, useContext} from 'react'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({product}) {
    const [item, setItem] = useState([])
   
    function cartAdd(prod, qty){
        console.log("--CARTADD--");
        console.log("prod:[",prod,"]");
        console.log("qty:[",qty,"]");
        setItem([...item, { item: prod, quantity: qty }])
    }
 
    console.log("Item:[",item,"]");
    return (
        <CartContext.Provider value={{ item, cartAdd }}> 
            { product }
        </CartContext.Provider>
    )
}

export default CartContextProvider;