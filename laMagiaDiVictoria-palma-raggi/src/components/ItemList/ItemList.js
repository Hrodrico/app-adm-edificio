import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemList.css';
import { Icon } from 'semantic-ui-react'
import ReactLoading from 'react-loading'; 

const ItemList = () => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [done , setDone] = useState(undefined);
    //Invoca API desde enviroment
    const API = process.env.REACT_APP_API_URL; 

    // console.log("API::",process.env.REACT_APP_API_URL);
    // console.log("API::",API);
    useEffect(() => {
        // Delay 2 seg. por consigna
        setTimeout(() => {
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
        }, 2000)
    }, [search]) 

    const activeSearch = (event) => {
        const val = event.target.value;
        setSearch(val);
      }

    return (
        <>
            <div id="input-container">
                <input className="input" type="text" onChange={activeSearch} value={search} placeholder="Buscar ejm. Margarita"/>
                <Icon name='search' />
            </div>             
               
                {
                    !done ? (   
                        <div className="loading"><ReactLoading type={"spinningBubbles"} color={"#000"}/> </div>
                    ) : (
                        <div className="item-list">
                            {
                                products ? (
                                    products.map(product => {
                                        return (
                                            <Item product={product} />
                                        )
                                    })
                                ) : ("No se encontro resultado")
                            }
                        </div>
                    )
                }
            
        </>
    )
}

export default ItemList
