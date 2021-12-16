import React from 'react'
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({products}) => {
    return (
        <div className="input-container">
            <div className="item-list">
                {
                    products ? (
                        products.map((product, index) => {
                            return (
                                <Item product={ product } key={ index }/>
                            )
                        })
                    ) : ("No se encontro resultado")
                }
            </div>
        </div>
    )
}

export default ItemList
