import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { FiShoppingCart } from "react-icons/fi";

function CartWidget () {
    const { itemCard } = useContext(CartContext);
    console.log('CardWidget.cart::', itemCard);

    const priceTotal = itemCard.length === 0 ? 0 : itemCard.reduce((previousValue, currentValue, currentIndex) => { return previousValue + currentValue.price}, 0);
    
    console.log('CardWidget.priceTotal::', priceTotal);

    return (
        <div className="item-cartWidget">
            <a href="." className="cartWidget__link">
                <FiShoppingCart className="icon-cart" />
                <span className="item-cartWidget-total">{itemCard.length}</span>
            </a>
            <span className="item-cartWidget-price">$ {priceTotal === 0 ? '0' : priceTotal}</span>
        </div>
    )
}

export default CartWidget;
