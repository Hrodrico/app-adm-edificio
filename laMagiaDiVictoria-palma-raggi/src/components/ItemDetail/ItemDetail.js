import React, { useState, useContext }  from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext'
import './ItemDetail.css';

function ItemDetailContainer({product}) {
    const { strDrink, strInstructions, dateModified, idDrink, strDrinkThumb } = product;
    const [buttonFinish, setButtonFinish] = useState(false);
    const [itemCard, setItemCard] = useContext(CartContext);
    
    // const { cartAdd } = useCartContext();
    
    console.log("product::",product);


    const onAdd = () =>{
        console.log("::Entra onAdd::");
        setButtonFinish(true);
        const itemFind = itemCard.find((obj) => obj.idDrink === product.idDrink)
        console.log("itemFind::",itemFind);
        if(!itemFind)
            setItemCard ( [ ...itemCard, {...product, qty: 1} ] )
        else
            setItemCard ( itemCard.map ( (obj) => obj.idDrink === product.idDrink ? {...itemFind, qty: itemFind.qty +1} : obj ) )
        
            // cartAdd(product, qty)
        console.log("itemCard::",itemCard);
        
    };

    

    const onDelete = (qty) =>{
        console.log("::Entra onDelete::");
        setButtonFinish(false);
        const itemFind = itemCard.find((x) => x.idDrink === product.idDrink)
        console.log("itemFind::",itemFind);

        if (itemFind.qty === 1) 
			setItemCard (itemCard.filter ((obj) => obj.id !== product.idDrink))
		else
            setItemCard (itemCard.map ((obj) => obj.id === product.idDrink ? {...itemFind, qty: itemFind.qty -1} : obj))
		
        
            // cartAdd(product, qty)
        console.log("itemCard::",itemCard);
        
    };

    const onEmpty = () =>{
        setItemCard([]);
        console.log("itemCard::",itemCard)
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
                            <>
                                <Button content='Agregar Carro' primary onClick={() => setItemCard(onAdd)}/>
                                <Button content='Eliminar Carro' primary onClick={() => setItemCard(onDelete)}/>
                                <Button content='Vaciar Carro' primary onClick={() => setItemCard(onEmpty)}/>
                                <Link to='/cart'><Button content='Finalizar Carro' secondary /></Link>
                            </>
                        }
                    </Card.Content>
                </Card>
            </div>
        </>
    )
}

export default ItemDetailContainer
