import React, { useState, useContext } from "react";
import { Divider, Form, Label, Button, Header, Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import { CartContext } from 'context/CartContext';
import { useFormik } from "formik";
import * as Yup from "yup";

//Firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from "firebase/FirebaseConfig"

function CartTransport() {
    const objClient = { name: '', lastName: '', email: '', repeatEmail: '', address: '' };
    const { itemCard, itemClear, setterStep } = useContext(CartContext);
    const [buyId, setBuyId] = useState('');
    const [buyedProducts, setBuyedProducts] = useState({...itemCard});

    const Formik = useFormik({
        initialValues: objClient,
        validationSchema: Yup.object({
            name: Yup.string().required("El nombre es obligatorio"),
            lastName: Yup.string().required("El apellido es obligatorio"),
            email: Yup.string().email("No es un e-mail valido").required("El e-mail es obligatorio"),
            repeatEmail: Yup.string().email("No es un e-mail valido").required("El reingreso e-mail es obligatorio").oneOf([Yup.ref("email")],"E-mail no son iguales "),
            address: Yup.string().required("La dirección es obligatorio"),
        }),
        onSubmit:(formData)=>{
            console.log("formData::",formData);
            getFinishedPurchase(formData);
        }
    });
    
    /* Price total of Carro */
    const priceTotal =  itemCard.reduce((totalCart, item) => totalCart + (item.price * item.quantity), 0);

    const getReviewOrder = () => {
        setterStep(1);
    }

    /* Msge finished buy */
    const getFinishedPurchase = async (data) => {
        setterStep(4);
        const saleDate = new Date().toLocaleDateString();
        const docRef = await addDoc(collection(db, "purchaseOrder"), {data, buyedProducts, priceTotal, saleDate})
        setBuyId(docRef)
        console.log("docRef::",docRef.id );
        console.log("buyId::",buyId);
        Swal.fire({
            icon: 'success',
            title: '<b>Gracias por su compra!!!</b>',
            html:'Su código de compra es: [' + docRef.id + '] <br>Te esperamos pronto!!!',
        })
        //Limpia  carro 15seg.
        setTimeout(() => {
            itemClear();
            setterStep(1);
        }, 15000);
    }

    return (
        <div>
            <Divider horizontal>
                    <Header as='h4'><Icon name='plane' />Revisión del Transporte</Header>
            </Divider>
            <Form onSubmit={Formik.handleSubmit}>
                <Form.Field inline>
                    <Form.Input type='text' placeholder='Nombre' name='name' onChange={Formik.handleChange}  value={Formik.values.name} error={Formik.errors.name} />
                    <Label pointing>Favor, ingrese Nombre</Label>
                </Form.Field>
                <Divider />
                <Form.Field inline>
                    <Form.Input type='text' placeholder='Apellido' name='lastName'  onChange={Formik.handleChange}  value={Formik.values.lastName}  error={Formik.errors.lastName} />
                    <Label pointing>Favor, ingrese Apellido</Label>
                    {/* <Label pointing='right'>Favor, ingrese Apellido</Label> */}
                </Form.Field>
                <Divider />
                <Form.Field>
                    <Form.Input type='text' placeholder='E-mail' name='email' onChange={Formik.handleChange}  value={Formik.values.email} error={Formik.errors.email} />
                    <Label pointing>Favor, ingrese E-mail</Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <Form.Input type='text' placeholder='Reingrese E-mail' name='repeatEmail'  onChange={Formik.handleChange}  value={Formik.values.repeatEmail} error={Formik.errors.repeatEmail} />
                    <Label pointing>Favor, reingrese E-mail</Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <Form.Input type='text' placeholder='Dirección' name='address' onChange={Formik.handleChange}   value={Formik.values.address} error={Formik.errors.address} />
                    <Label pointing>Favor, ingrese Dirección</Label>
                </Form.Field>
                <Button content='Volver' secondary onClick={ getReviewOrder} />
				<Button content='Limpiar' secondary onClick={ Formik.handleReset } />
                <Button content='Finalizar Compra' primary type="submit"/>
            </Form>
        </div>
    )
}

export default CartTransport
