import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";



function ItemCount ({stock=0, initial=0})  {    
    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => {
        
        if(counter < stock){
		    setCounter(+counter + 1);
        }else{
            Toast.fire({
                icon: 'error',
                title: 'No hay más stock'
                })
        }
	};

	const handlerCounterDown = () => {
        if(counter > 0)
		    setCounter(+counter - 1);
        else{
            Toast.fire({
                icon: 'error',
                title: 'Stock, debe ser mayor a 0'
                })
        }
	};

    const handlerAddCart = () => {
		console.log("handlerAddCart");
        
	};

    const Toast = Swal.mixin({
        toast: true,
        position: 'top', //'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    return (
        <>
            <div className="item-section-stock">            
                Stock Disponible: { stock }
            </div>
            <div className="itemSection">            
                <AiOutlineMinusCircle className="icon" onClick={handlerCounterDown}/>
                <input type="text" className="input" id="input" defaultValue={initial} value={counter} placeholder="Contador"/>
                <BsFillPlusCircleFill className="icon" onClick={handlerCounterUp}/>
            </div>            
            <button onClick={handlerAddCart}>Agregar al Carrito</button>
        </>
        
    )
}

export default ItemCount
