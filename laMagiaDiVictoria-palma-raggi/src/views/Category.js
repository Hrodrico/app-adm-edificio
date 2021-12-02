import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

function Category() {
    const { categoryId } = useParams();
        
    console.log(":::categoryId:::",categoryId);

    return (
        <>
            {/* <ItemListContainer greeting="Bienvenid@!!!" categoryId={params.Id}/> */}
            
            <h1>{categoryId}</h1>
            <ItemListContainer categoryId={categoryId}/>

        </>
    )
}

export default Category
