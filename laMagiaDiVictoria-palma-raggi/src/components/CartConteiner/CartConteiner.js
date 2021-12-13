import React, { useContext, useState } from 'react';
import { Divider, Header, Icon, Step, Button, Segment, Grid } from 'semantic-ui-react'
import { Toast } from '../../utils/Swal'
import { Link } from "react-router-dom";
import CartDetail from '../CartDetail/CartDetail'
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format';
import './CartConteiner.css'

function CartContainer() {
    const [ activeOrden, setActiveOrden ] = useState(false);
    const [ activeTransport, setActiveTransport ] = useState(false);
    const [ activePaid, setActivePaid ] = useState(false);
    const [ activeConfirm, setActiveConfirm ] = useState(false);
    const { itemCard, itemClear } = useContext(CartContext);

    //Precio total de Carro
    const priceTotal = itemCard.reduce((totalCart, item) => totalCart + item.price * item.quantity, 0)
    //cantidad de productos en carro
	const itemsQuantity = itemCard.reduce((totalCart, item) => totalCart + item.quantity,0);

    if(itemsQuantity === 0){
        return (
            <div className="not-product-container">
                <h1 className="not-product-container-text">No existen productos en carro</h1>
                <Link to="/"><Button content='Volver' primary/></Link>
            </div>
        )
    }


    //Msje finalizar compra

    //Msje finalizar compra
    const getFinalizar = () => {
        setActiveOrden('completed');
        setActiveConfirm('active');
        // ThankYouAnimate();
        Toast.fire({
            icon: 'info',
            title: 'Gracias por su compra. <br>Te esperamos pronto!!!'
            })
    }

  
    
    return (
        <>
            <Segment>
                <div className="step-cart-container">
                    {/* <Divider horizontal>
                            <Header as='h4'><Icon name='cart' />Carro de Compras</Header>
                        </Divider>
                        <p>
                            Favor, validar la cantidad de productos.
                        </p> */}
                    <Divider horizontal>
                        <Header as='h4'><Icon name='align justify' />Proceso de Compra</Header>
                    </Divider>
                    
                    <Step.Group attached='top'>
                        <Step { ...activeOrden }>
                            <Icon name='shopping bag' />
                            <Step.Content>
                                <Step.Title>Orden</Step.Title>
                                <Step.Description>Total Productos Seleccionados: {itemsQuantity} </Step.Description>
                            </Step.Content>
                        </Step>

                        <Step {...activeTransport}>
                            <Icon name='truck' />
                            <Step.Content>
                                <Step.Title>Transporte</Step.Title>
                                <Step.Description>Elija opción de envío</Step.Description>
                            </Step.Content>
                        </Step>

                        <Step {...activePaid}>
                            <Icon name='payment' />
                            <Step.Content>
                                <Step.Title>Pago</Step.Title>
                                <Step.Description>Ingreso información de Pago</Step.Description>
                            </Step.Content>
                        </Step>

                        <Step {...activeConfirm}>
                            <Icon name='info' />
                            <Step.Content>
                                <Step.Title>Confirmar Orden</Step.Title>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </div>
                <Divider horizontal>
                    <Header as='h4'><Icon name='shopping bag' />Revisión del Pedido</Header>
                </Divider>
                <Grid columns={2} relaxed='very' >
                    <Grid.Column>
                        {
                            itemCard.map((item) => {
                                return <CartDetail key={item.id} items={item} />
                            })
                        }
                    </Grid.Column>
                    <Grid.Column>
                        
                        <Segment>
                            <div className="total-cart">
                                Total: <NumberFormat value= {priceTotal} displayType={'text'} thousandSeparator={true}/>
                            </div>
                        </Segment>
                        <div className="btn-accion">
                                <Button content='Vaciar carro' secondary onClick={ itemClear }/>
                                <Button content='Finalizar Compra' primary onClick={ getFinalizar }/>
                        </div>
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    )
}

export default CartContainer
