import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({greeting}) {
    return (
        <>
            <div style={{color:"green", margin:"25px",fontSize: "2rem", alignContent:"center"}}>
                {greeting}
            </div>
            <ItemCount stock="7" initial="2"/> 
        </>
    )
}

export default ItemListContainer;