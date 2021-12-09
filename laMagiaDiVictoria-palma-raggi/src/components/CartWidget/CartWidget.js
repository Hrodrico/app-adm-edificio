import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

function CartWidget ({qty}) {
    return (
        <div className="item-contener">
            <h1>Mi Carro <FiShoppingCart/> </h1>
            <div>
                --Productos seleccionados-- 
                {qty}
            </div>
            
        </div>
    )
}

export default CartWidget;
