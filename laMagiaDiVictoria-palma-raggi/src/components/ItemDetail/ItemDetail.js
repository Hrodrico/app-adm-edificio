import React, { useState, useContext }  from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext'
import './ItemDetail.css';

function ItemDetail({ product }) {
    const { strDrink, strInstructions, dateModified, idDrink, strDrinkThumb } = product;
    const [buttonFinish, setButtonFinish] = useState(false);
    const { itemAdd } = useContext(CartContext);
    
    console.log("1ItemDetail.product::",product);

    const onAdd = (qty) =>{
        console.log("onAdd.product::",product);
        setButtonFinish(true);
        itemAdd(product, qty);
    };


    return (
        <>
            <div className='item-detail'>
                <Card>
                    <Image src={strDrinkThumb} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{strDrink}</Card.Header>
                        <Card.Meta>{dateModified}</Card.Meta>
                        <Card.Description>{strInstructions}</Card.Description>
                    </Card.Content>
                    <Card.Content extra><Icon name='dollar' /><NumberFormat value= {idDrink} displayType={'text'} thousandSeparator={true}/></Card.Content>
                </Card>
            </div>

            <div className='count-detail'>
                { !buttonFinish && <ItemCount stock={6} initial={1} onAdd={onAdd} /> }
            </div>    

            <div className='button-detail'>
                        { buttonFinish && 
                            <>
                                <Link to='/'><Button content='Seguir Comprando' primary /></Link>
                                <Link to='/cart'><Button content='Terminar mi compra' secondary /></Link>
                            </>
                        }
            </div>
        </>
    )
}

export default ItemDetail
