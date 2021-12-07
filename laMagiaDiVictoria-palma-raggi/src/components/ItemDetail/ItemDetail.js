import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetailContainer({product}) {
    console.log("product::",product);
    const { strDrink, strInstructions, dateModified, idDrink, strDrinkThumb } = product;
    const [buttonFinish, setButtonFinish] = useState(false);
    

    const onAdd = (qty) =>{
        setButtonFinish(true);
        console.log("Cantidad Producto::",qty);
    };

    return (
        <>
        <div className='item'>
            <Card>
                <Image src={strDrinkThumb} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{strDrink}</Card.Header>
                    <Card.Meta>{dateModified}</Card.Meta>
                    <Card.Description>{strInstructions}</Card.Description>
                </Card.Content>
                <Card.Content extra><Icon name='dollar' /><NumberFormat value= {idDrink} displayType={'text'} thousandSeparator={true}/></Card.Content>
                <Card.Content extra>
                { !buttonFinish && <ItemCount stock={6} initial={1} onAdd={onAdd} /> }
                { buttonFinish &&
                    <Link to='/cart'>
                        <button>Finalizar Carro</button>
                    </Link>
                }
                </Card.Content>
            </Card>
	    </div>        
            
        </>
    )
}

export default ItemDetailContainer
