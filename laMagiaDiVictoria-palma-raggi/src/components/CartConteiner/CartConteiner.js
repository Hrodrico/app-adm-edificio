import React, { useContext, useState } from 'react';
import { Divider, Header, Icon, Step, Button, Segment, Grid } from 'semantic-ui-react'
import { Toast } from '../../utils/Swal'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import CartDetail from '../Cart/CartDetail'
import NumberFormat from 'react-number-format';
import './CartConteiner.css'

function CartContainer() {
    const [ step, setStep ] = useState(1);
    const { itemCard, itemClear } = useContext(CartContext);

    /* Price total of Carro */
    const priceTotal =  itemCard.reduce((totalCart, item) => totalCart + (item.price * item.quantity), 0);
        
    /* Quantity of productos in cart */
	const itemsQuantity = itemCard.reduce((totalCart, item) => totalCart + item.quantity, 0);
    

    if(itemsQuantity === 0){
        return (
            <div className="not-product-container">
                <h1 className="not-product-container-text">No existen productos en carro</h1>
                <Link to="/"><Button content='Volver' primary/></Link>
            </div>
        )
    }

    /* Msge finished buy */
    const getFinalizar = () => {
        setStep(4);
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
                        <Step completed = { step > 1 } active = { step === 1 } disabled = { step !== 1 }>
                            <Icon name='shopping bag' />
                            <Step.Content>
                                <Step.Title>Orden</Step.Title>
                                <Step.Description>Total Productos Seleccionados: { itemsQuantity } </Step.Description>
                            </Step.Content>
                        </Step>

                        <Step completed = { step > 2 } active= { step === 2 } disabled = { step !== 2 }>
                            <Icon name='truck' />
                            <Step.Content>
                                <Step.Title>Transporte</Step.Title>
                                <Step.Description>Elija opción de envío</Step.Description>
                            </Step.Content>
                        </Step>

                        <Step completed = { step > 3 } active = { step === 3 } disabled = { step !== 3 }>
                            <Icon name='payment' />
                            <Step.Content>
                                <Step.Title>Pago</Step.Title>
                                <Step.Description>Ingreso información de Pago</Step.Description>
                            </Step.Content>
                        </Step>

                        <Step completed = { step > 4 } active = { step === 4 } disabled = { step !== 4 }>
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
                                Total: <NumberFormat value= { priceTotal } displayType={'text'} thousandSeparator={true}/>
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
