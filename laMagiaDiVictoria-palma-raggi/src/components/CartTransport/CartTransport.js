import React, { useState, useContext } from "react";
import { Divider, Form, Label, Button, Header, Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import { CartContext } from 'context/CartContext';
//Firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from "firebase/FirebaseConfig"

function CartTransport() {
    const objClient = {
        name: '',
        lastName: '',
        email: '',
        address: ''
    };

    const [client, setClient] = useState(objClient);
    const { itemCard, itemClear, setterStep } = useContext(CartContext);
    const [buyId, setBuyId] = useState('');
    const [buyedProducts, setBuyedProducts] = useState('');

    
    /* Price total of Carro */
    const priceTotal =  itemCard.reduce((totalCart, item) => totalCart + (item.price * item.quantity), 0);

    const onChange = (e) => {
		const { name, value } = e.target;
		setClient({...client, [name]: value })
		setBuyedProducts({...itemCard})
	};

    const getReviewOrder = () => {
        setterStep(1);
    }

    /* Msge finished buy */
    const getFinalizar = async (e) => {
        setterStep(4);
        e.preventDefault()
        const saleDate = new Date().toLocaleDateString();
        const docRef = await addDoc(collection(db, "purchaseOrder"), {client, buyedProducts, priceTotal, saleDate})
        setBuyId(docRef)
        setClient(objClient)
        console.log("docRef::",docRef.id );
        console.log("buyId::",buyId);
        Swal.fire({
            icon: 'success',
            title: '<b>Gracias por su compra!!!</b>',
            html:'Su código de compra es: [' + docRef.id + '] <br>Te esperamos pronto!!!',
        })
        //Limpia  carro
        setTimeout(() => {
            itemClear();
            setterStep(1);
        }, 10000);
    }

    return (
        <div>
            <Divider horizontal>
                    <Header as='h4'><Icon name='plane' />Revisión del Transporte</Header>
            </Divider>
             <Form>
                <Form.Field inline>
                    <input type='text' placeholder='Nombre' name='name' onChange={onChange} value={client.name} />
                    <Label pointing='right'>Favor, ingrese Nombre</Label>
                </Form.Field>
                <Divider />
                <Form.Field inline>
                    <input type='text' placeholder='Apellido' name='lastName' onChange={onChange}  value={client.lastName} />
                    <Label pointing='right'>Favor, ingrese Apellido</Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='text' placeholder='E-mail' name='email' onChange={onChange} value={client.email} />
                    <Label pointing>Favor, ingrese E-mail</Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='text' placeholder='Dirección' name='address' onChange={onChange}  value={client.address} />
                    <Label pointing>Favor, ingrese Dirección</Label>
                </Form.Field>
                <Button content='Volver' secondary onClick={ getReviewOrder} />
				<Button content='Limpiar' secondary onClick={() => setClient(objClient)} />
                <Button content='Finalizar Compra' primary onClick={ getFinalizar } type="submit"/>
            </Form>
        </div>
    )
}

export default CartTransport
