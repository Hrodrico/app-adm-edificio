import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemList.css';
import { Icon } from 'semantic-ui-react'

const ItemList = () => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    //Invoca API desde enviroment
    const API = process.env.REACT_APP_API_URL; 

    // console.log("API::",process.env.REACT_APP_API_URL);
    // console.log("API::",API);
    useEffect(() => {
        // fetch(process.env.REACT_APP_API_URL)
        fetch(`${API}${search}`)
            .then(response => response.json())
            .then(json => {
                // console.log("json::",json.drinks);
                setProducts(json.drinks);
            })
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
            <div className="item-list">                
                {
                    products.map(product => {
                        return (
                            <Item product={product} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemList
