import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { HiOutlinePlusSm, HiOutlineMinus } from 'react-icons/hi';
import { Button } from 'semantic-ui-react'



function ItemCount ({stock=0, initial=0, onAdd})  {    
    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => {
        if(counter < stock)
		    setCounter(+counter + 1);
        else
            Toast.fire({
                icon: 'warning',
                title: 'No hay más stock'
                })
        
	};

	const handlerCounterDown = () => {
        if(counter > 0)
		    setCounter(+counter - 1);
        else
            Toast.fire({
                icon: 'error',
                title: 'Stock, debe ser mayor a 0'
                })
        
	};

    const handlerAddCart = () => {
        onAdd(counter)
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
        <div className="item-content">            
            <div className="item-section-stock">            
                Stock Disponible: { stock }
            </div>

            <div className="item-section">
                <button className="item-button"  onClick={handlerCounterDown}><HiOutlineMinus className="icon"/></button>
                <input type="text" className="input" defaultValue={initial} value={counter} placeholder="Contador"/>
                <button className="item-button"   onClick={handlerCounterUp}><HiOutlinePlusSm className="icon"/></button>
            </div>        

            <div className="item-section">
                { counter > 0 && <Button content='Agregar a Carro' primary onClick={handlerAddCart}/> }
            </div>
        </div>
    )
}

export default ItemCount
