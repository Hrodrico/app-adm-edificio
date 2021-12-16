import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading'; 
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css";

//Firebase
import { getDocs, collection, query } from "firebase/firestore";
import { db } from '../../firebase/FirebaseConfig'

function ItemDetailContainer() {
    const [products, setProducts] = useState({});
    const [done , setDone] = useState(undefined);
    const paramsId = useParams();

    //ENV
    // const API = process.env.REACT_APP_API_URL_ITEM; 
    // useEffect(() => {
    //     // Delay 2 seg. por consigna
    //     setTimeout(() => {
    //         //Consume API en enviroment
    //         fetch(`${API}${idDrink}`)
    //             .then(response => response.json())
    //             .then(json => {
    //                 // console.log("json::",json.drinks);
    //                 console.log("json::",json.drinks[0]);
    //                 setProducts(json.drinks[0]);
    //                 setDone(true);
    //             })
    //             .catch((error) => {
    //                 console.error('Error: ', error);
    //                 throw error;
    //             })
    //     }, 2000)
    // }, []) 
    
    //Filtra id por params 
    const itemDetailFilter = products.filter((obj) => {
        return obj.id === paramsId.id}
    )

    console.log("itemDetailFilter::",itemDetailFilter);

    //Hooks getProducts invoca Firebase
    useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, "product"))
			const docs = []
			const querySnapshot = await getDocs(q)
			querySnapshot.forEach((doc) => {
				docs.push({...doc.data(), id: doc.id})
			})
			setProducts(docs)
            setDone(true);
		}
		getProducts()
	}, [])

    return (
        <>  
            {
                !done ? ( 
                    <div className="loading">
                        <ReactLoading type={"spinningBubbles"} color={"#000"}/>
                    </div> 
                ) : (
                    <div className="ItemDetailContainer" >
                        { 
                            Object.keys(products).length > 0 ? (
                                itemDetailFilter.map((products) => {
                                return <ItemDetail key={products.id} product={products} />
                            })
                            ) : ("No se encontro producto") 
                        }
                    </div>
                )
            }   
        </>
    )
}

export default ItemDetailContainer
