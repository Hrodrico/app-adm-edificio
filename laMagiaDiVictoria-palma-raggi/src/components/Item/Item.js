import React from 'react'
import './Item.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';

function Item({product}) {
    const { strDrink, strInstructions, dateModified, idDrink, strDrinkThumb } = product;
    // console.log("strDrink::",strDrink);
    // console.log("strInstructions::",strInstructions);
    // console.log("dateModified::",dateModified);
    // console.log("strDrinkThumb::",strDrinkThumb);
    return (
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
    )
}

export default Item
