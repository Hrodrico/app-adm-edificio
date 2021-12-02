import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

function Categorys() {
    const { categoryId } = useParams();
    let _cat1 = "Cocktail";
    let _cat2 = "Ordinary Drink";
    let _cat3 = "Coffee / Tea";
    
    console.log(":::categoryId:::",categoryId);
    console.log("_cat1:::",_cat1)
    console.log("_cat2:::",_cat2)
    console.log("_cat3:::",_cat3)
    return (
        <>
            {/* <ItemListContainer greeting="Bienvenid@!!!" categoryId={params.Id}/> */}
                        
            <h1>{_cat1}</h1>
            <ItemListContainer greeting="Bienvenid@!!!" categoryId={_cat1}/>

            <h1>{_cat2}</h1>
            <ItemListContainer categoryId={_cat2}/>

            <h1>{_cat3}</h1>
            <ItemListContainer categoryId={_cat3}/>
        </>
    )
}

export default Categorys
