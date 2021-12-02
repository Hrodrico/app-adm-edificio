import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ReactLoading from 'react-loading'; 
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [products, setProducts] = useState({});
    const [done , setDone] = useState(undefined);
    const params = useParams();
    let idDrink = params.id;
    
    //ENV
    const API = process.env.REACT_APP_API_URL_ITEM; 
    
    console.log("entra:",`${API}${idDrink}`);
        
    
    useEffect(() => {
        
        // Delay 2 seg. por consigna
        setTimeout(() => {
            //Consume API en enviroment
            fetch(`${API}${idDrink}`)
                .then(response => response.json())
                .then(json => {
                    // console.log("json::",json.drinks);
                    console.log("json::",json.drinks[0]);
                    setProducts(json.drinks[0]);
                    setDone(true);
                })
                .catch((error) => {
                    console.error('Error: ', error);
                    throw error;
                })
        }, 2000)
    }, []) 


    return (
        <>  
            {
                !done ? ( 
                    <div className="loading"><ReactLoading type={"spinningBubbles"} color={"#000"}/> </div> 
                ) : (
                    <div className="ItemDetailContainer" >
                    { 
                        Object.keys(products).length > 0 ? (<ItemDetail product={products}/>) : ("No se encontro producto") 
                    }
                    </div>
                )
            }   
        </>
    )
}

export default ItemDetailContainer
