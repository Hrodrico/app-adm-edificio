import React, { useContext } from "react";
import { List, Header, Divider, Icon, Image } from 'semantic-ui-react'
import { CartContext } from 'context/CartContext';
import NumberFormat from 'react-number-format';

function CartResumenOrder() {
    const { itemCard, step, setterStep } = useContext(CartContext);

    /* Price total of Carro */
    const priceTotal =  itemCard.reduce((totalCart, item) => totalCart + (item.price * item.quantity), 0);


    return (
        <div>
            <Divider horizontal>
                <Header as='h4'><Icon name='file' />Resumen de Compra</Header>
            </Divider>
            <List divided relaxed>
                {
                    itemCard ? (
                        itemCard.map((product, index) => {
                            return (
                                <List.Item>
                                    <Image avatar src={product.image} />
                                    <List.Content>
                                    <List.Header as='a'>{ product.name }</List.Header>
                                    <List.Description as='a'><NumberFormat value={ product.price } displayType={'text'} thousandSeparator={true}/></List.Description>
                                    </List.Content>
                                </List.Item>
                            )
                        })
                    ) : ("No se encontro resultado")
                }
                
                Precio Total: {priceTotal}
            </List>
        </div>
    )
}

export default CartResumenOrder
