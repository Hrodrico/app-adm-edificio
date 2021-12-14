import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import ReactLoading from 'react-loading'; 
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({categoryId}) => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [done , setDone] = useState(undefined);
    
    //Invoca API desde enviroment
    const API = process.env.REACT_APP_API_URL; 

    useEffect(() => {
        // Delay 2 seg. por consigna
        console.log("categoryId::",{categoryId});
        if({categoryId}.length > 0){
            setSearch(categoryId);
        }
        
        // setTimeout(() => {
            //Consume API en enviroment
            fetch(`${API}${search}`)
                .then(response => response.json())
                .then(json => {
                    // console.log("json::",json.drinks);
                    setProducts(json.drinks);
                    setDone(true);
                    
                })
                .catch((error) => {
                    console.error('Error: ', error);
                    throw error;
                })
        // }, 0)
    }, [search]) 

    const activeSearch = (event) => {
        const val = event.target.value;
        setSearch(val);
      }

    return (
            !done ? (   
                <div className="loading"><ReactLoading type={"spinningBubbles"} color={"#000"}/> </div>
            ) : (
                <div className="input-container">
                    <div className="input-search">
                        <Icon name='search' className="icon"/>
                        <input type="text" onChange={activeSearch} value={search} placeholder="Buscar Tequila"/>
                    </div>  
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
            
    )
}

export default ItemList
