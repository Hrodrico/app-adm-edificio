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
    // const [itemCard, setItemCard] = useContext(CartContext);
    // const [itemCard, setItemCard] = useState([]);
    const { itemAdd, itemRemove } = useContext(CartContext);
    
    // // const { cartAdd } = useCartContext();
    console.log("ItemDetail.product::",product);

    const onAdd = (qty) =>{
        setButtonFinish(true);
        itemAdd(product, qty);
    };

    const onDelete = () =>{
        setButtonFinish(false);
        itemRemove(product);
    };

    // const onAdd = () =>{
    //     console.log("::Entra onAdd::");
    //     setButtonFinish(true);
    //     const itemFind = itemCard.find((obj) => obj.idDrink === product.idDrink)
    //     // let item = isInCart();
    //     // console.log("itemFind::",item);
    //     console.log("itemFind::",itemFind);
    //     console.log("itemCard::",itemCard);
        
    //     if(!itemFind)
    //         setItemCard ( [ ...itemCard, {...product, qty: 1} ] );
    //     else
    //         setItemCard ( itemCard.map ( (obj) => obj.idDrink === product.idDrink ? {...itemFind, qty: itemFind.qty +1} : obj ) );
        
    //     // // cartAdd(product, qty)
        
    // };

    

    // const onDelete = (qty) =>{
    //     console.log("::Entra onDelete::");
    //     setButtonFinish(false);
        // const itemFind = itemCard.find((x) => x.idDrink === product.idDrink)
        // let item = isInCart();
        // console.log("itemFind::",item);

        // if (item.qty === 1) 
		// 	setItemCard (itemCard.filter ((obj) => obj.id !== product.idDrink));
		// else
        //     setItemCard (itemCard.map ((obj) => obj.id === product.idDrink ? {...item, qty: item.qty -1} : obj));
		
        
            // // cartAdd(product, qty)
    //     console.log("itemCard::",itemCard);
        
    // };

    // const onEmpty = () =>{
    //     setButtonFinish(false);
    //     setItemCard([]);
    //     console.log("itemCard::",itemCard);
    // };

    // const isInCart = () =>{
    //     const itemFind = itemCard.find((obj) => obj.idDrink === product.idDrink);
    //     return itemFind;
    // };

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
                        {/* { !buttonFinish && <Button content='Agregar Carro' primary onClick={onAdd}/>} */}
                        {/* <Button content='Agregar Carro' primary onClick={() => setItemCard(onAdd)}/> */}
                        { buttonFinish && 
                        <>
                                {/* <Button content='Eliminar Carro' primary onClick={() => setItemCard(onDelete)}/> */}
                                {/* <Button content='Vaciar Carro' primary onClick={() => setItemCard(onEmpty)}/> */}
                                {/* <Button content='Eliminar Carro' primary onClick={onDelete}/> */}
                                <Button content='Vaciar Carro' primary onClick={ onDelete }/>
                                <Link to='/cart'><Button content='Finalizar Carro' secondary /></Link>
                            </>
                        }
            </div>
        </>
    )
}

export default ItemDetail
