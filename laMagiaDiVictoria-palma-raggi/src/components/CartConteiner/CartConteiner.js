import React, { useContext } from 'react';
import { Divider, Header, Icon, Step, Button, Segment } from 'semantic-ui-react'

import { Link } from "react-router-dom";
import { CartContext } from 'context/CartContext';
// import CartDetail from 'components/Cart/CartDetail'
// import CartDetail from '@/components/Cart/CartDetail'
// import NumberFormat from 'react-number-format';
 import CartReviewOrder from 'components/CartReviewOrder/CartReviewOrder'
 import CartTransport from 'components/CartTransport/CartTransport'
 import CartResumenOrder from 'components/CartResumenOrder/CartResumenOrder'

import './CartConteiner.css'

function CartContainer() {
    // const [ step, setStep ] = useState(1);
    const { itemCard,  step, setterStep  } = useContext(CartContext);

    /* Price total of Carro */
    // const priceTotal =  itemCard.reduce((totalCart, item) => totalCart + (item.price * item.quantity), 0);
        
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

  

  

    function renderSwitch(param) {
        switch(param) {
            case 1:
                return <CartReviewOrder steping={param}/>;
            case 2:
                return <CartTransport steping={param}/>;
            case 3:
                return 'bar';
            case 4:
                return <CartResumenOrder/>
            default:
                return <CartReviewOrder steping={1}/>;
        }
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
                                <Step.Title>Confirmar Orden</Step.Title>
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
                                <Step.Title>Resumen Orden</Step.Title>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                    { renderSwitch(step) }
                </div>
                
            </Segment>
        </>
    )
}

export default CartContainer
