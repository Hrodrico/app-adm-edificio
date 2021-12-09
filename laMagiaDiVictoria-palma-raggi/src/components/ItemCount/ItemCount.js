import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { HiOutlinePlusSm, HiOutlineMinus } from 'react-icons/hi';
// import { BsFillPlusCircleFill } from "react-icons/bs";
// import { AiOutlineMinusCircle } from "react-icons/ai";


// function ItemCount ({stock=0, initial=0, onAdd})  {    
function ItemCount ({stock=0, initial=0})  {    
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

    // const handlerAddCart = () => {
	// 	console.log("Btn:: Agregar a carrito");
    //     console.log("initial::",initial);
    //     console.log("counter::",counter);
    //     setCounter(initial)
    //     onAdd(counter)
        
	// };

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
                <button className="item-button" onClick={handlerCounterDown}><HiOutlineMinus className="icon"/></button>
                <input type="text" className="input" defaultValue={initial} value={counter} placeholder="Contador"/>
                <button className="item-button" onClick={handlerCounterUp}><HiOutlinePlusSm className="icon"/></button>
            </div>        

            {/* { counter > 0 && <button onClick={handlerAddCart}>Agregar a Carro</button> } */}
        </div>
        
    )
}

export default ItemCount
