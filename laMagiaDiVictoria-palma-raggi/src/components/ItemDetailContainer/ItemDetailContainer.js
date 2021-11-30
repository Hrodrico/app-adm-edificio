import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ReactLoading from 'react-loading'; 

function ItemDetailContainer({uid}) {
    const [products, setProducts] = useState({});
    const [done , setDone] = useState(undefined);

    const API = process.env.REACT_APP_API_URL_ID; 
    console.log("entra:",`${API}${uid}`);
    console.log("products:",products);
    console.log("products.length:",);
    
    useEffect(() => {
        // Delay 2 seg. por consigna
        setTimeout(() => {
            //Consume API en enviroment
            fetch(`${API}${uid}`)
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
