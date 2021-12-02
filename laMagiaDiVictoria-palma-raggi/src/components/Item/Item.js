import React from 'react'
import './Item.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';
import { NavLink } from 'react-router-dom';

function Item({product}) {
    const { strDrink, strInstructions, dateModified, idDrink, strDrinkThumb } = product;
    
    return (
        <>
            <NavLink to={`/item/${idDrink}`}>
                <div className='item'>
                    <Card>
                        <Image src={strDrinkThumb} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{strDrink}</Card.Header>
                            <Card.Meta>{dateModified}</Card.Meta>
                            <Card.Description>{strInstructions}</Card.Description>
                        </Card.Content>
                        <Card.Content extra><a href="/"><Icon name='dollar' /><NumberFormat value= {idDrink} displayType={'text'} thousandSeparator={true}/></a>
                        </Card.Content>
                    </Card>
                </div>        
            </NavLink>
        </>
    )
}

export default Item
