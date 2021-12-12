import React, { useState, createContext } from 'react'
// import React, { useState, createContext, useContext} from 'react'


//Export Context
export const CartContext = createContext([])

// export const useCartContext = () => useContext(CartContext)

//Context Provider
export const CartProvider = ({ item = [], children })  => {
    const [itemCard, setItemCard] = useState(item);
    
    console.log('CartProvider.itemCard:[', item ,']');
    //Agrega Item al carro
    const itemAdd = (item, qty) => {
        console.log('item', item);
        console.log('quantity', qty);

        //Preguta si existe
        if (!isInCart(item.id)) {
          const objCart = {
            id: item.idDrink,
            name: item.strDrink,
            price: item.idDrink,
            quantity: qty
          }
          setItemCard(itemCard.concat(objCart));
        } else {
          console.log('El producto ya fue agregado al carro');
        }
      }
      
      //Elimina Item al carro
      const itemRemove = (itemId) => {
        const newCart = itemCard.filter(product => product.id !== itemId);
        setItemCard(newCart);
      }
    
      //Limpia carro
      const itemClear = () => {
        setItemCard([]);
      }
    
      //Existe item en carro
      const isInCart = (id) => {
        if (itemCard.find(product => product.id === id)) 
          return true;
         else 
          return false;
      }

    console.log("children:[",children,"]");
    console.log("Item:[",itemCard,"]");

    return (
        <CartContext.Provider value={{ itemCard, itemAdd, itemRemove, itemClear, isInCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;