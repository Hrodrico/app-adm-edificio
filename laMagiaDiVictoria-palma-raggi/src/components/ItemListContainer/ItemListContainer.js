import React from 'react'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({greeting}) {
    return (
        <>
            <div style={{color:"green", margin:"25px",fontSize: "2rem", alignContent:"center"}}>{greeting}</div>
            {/* <ItemCount stock="7" initial="2"/>  */}
            <ItemList />
        </>
    )
}

export default ItemListContainer;