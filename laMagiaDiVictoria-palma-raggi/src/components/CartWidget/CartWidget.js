import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

function CartWidget ({qty}) {
    return (
        <div>
            <h1>Tus productos seleccioandos <FiShoppingCart/> </h1>
            Productos: {qty}
        </div>
    )
}

export default CartWidget;
