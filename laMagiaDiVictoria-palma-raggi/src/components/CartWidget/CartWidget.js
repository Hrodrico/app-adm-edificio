import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { FiShoppingCart } from "react-icons/fi";

function CartWidget () {
    const { cart } = useContext(CartContext);

    console.log('CardWidget => cart', cart);

    return (
        <div className="item-contener">
            <FiShoppingCart/> 
        </div>
    )
}

export default CartWidget;
