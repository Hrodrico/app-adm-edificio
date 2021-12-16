import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading'; 
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css";

//Firebase
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from '../../firebase/FirebaseConfig'

function ItemDetailContainer() {
    const [products, setProducts] = useState({});
    const [done , setDone] = useState(undefined);
    const paramsId = useParams();

    
    //Filtra id por params 
    // const itemDetailFilter = products.filter((obj) => {
    //     return obj.id === paramsId.id}
    // )

    // console.log("itemDetailFilter::",itemDetailFilter);

    //Hooks getProducts invoca Firebase
    useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, "product"), where(documentId(), '==', paramsId.id));
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
                                products.map((prod) => {
                                return <ItemDetail key={prod.id} product={products} />
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
