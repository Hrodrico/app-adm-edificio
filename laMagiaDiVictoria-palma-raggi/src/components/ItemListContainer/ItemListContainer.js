import React from 'react'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ categoryId , greeting}) {
    const { idCategory } = useParams();    
    console.log("ItemListContainer");
    console.log("prop.categoryId:[",categoryId,"]");
    console.log("param.idCategory:[",idCategory,"]");
    if(idCategory){
        categoryId = idCategory;
    }

    return (
        <>            
            <div style={{color:"green", margin:"25px",fontSize: "2rem", alignContent:"center"}}>{greeting}</div>
            <ItemList categoryId = {categoryId} />
            {/* <ItemCount stock="7" initial="2"/>  */}
        </>
    )
}

export default ItemListContainer;