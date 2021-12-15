import React, {  useContext }  from 'react'
import './Item.css';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';
import { NavLink } from 'react-router-dom';
import { LessText } from '../../utils/fnc'
import { CartContext } from '../../context/CartContext'


function Item({product}) {
    const { strDrink, strInstructions, dateModified, idDrink, strDrinkThumb } = product;
    const { itemAdd } = useContext(CartContext);
    
    const handlerAddCart = () => {
        itemAdd(product, 1);
	};
    return (
        <>
            {/* <NavLink to={`/item/${idDrink}`}> */}
                <div className='item'>
                    <Card>
                        <Image src={strDrinkThumb} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{strDrink}</Card.Header>
                            <Card.Meta>{dateModified}</Card.Meta>
                            {/* <Card.Description>{strInstructions}</Card.Description> */}
                            <Card.Description><LessText text={strInstructions} maxLength={90}/></Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <NavLink to={`/item/${idDrink}`}>
                                <Label.Group tag>
                                    <Label>
                                        <Icon name='dollar' />
                                            <NumberFormat value= {idDrink} displayType={'text'} thousandSeparator={true}/>
                                        </Label>
                                    </Label.Group>
                            </NavLink>
                        </Card.Content>
                        {/* <Card.Content extra><a href="/"><Icon name='dollar' /><NumberFormat value= {idDrink} displayType={'text'} thousandSeparator={true}/></a></Card.Content> */}
                    </Card>
                    <Button content='AGREGAR' onClick={handlerAddCart} primary><Icon name='cart'/> AGREGAR </Button>
                    <NavLink to={`/item/${idDrink}`}><Button content='VER DETALLE' secondary/></NavLink>
                </div>        
        </>
    )
}

export default Item
