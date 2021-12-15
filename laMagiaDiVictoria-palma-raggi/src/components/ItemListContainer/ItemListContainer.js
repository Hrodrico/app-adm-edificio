import React, { useState } from 'react'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import './ItemListContainer.css';

function ItemListContainer({ categoryId , greeting}) {
    const { idCategory } = useParams();    
    const [visible, setVisible] = useState(true);

    const handleDismiss = () => {
        setVisible(false);
        setTimeout(() => {
            setVisible(true);
        }, 15000)
      }

    // console.log("ItemListContainer");
    // console.log("prop.categoryId:[",categoryId,"]");
    // console.log("param.idCategory:[",idCategory,"]");
    
    if(idCategory){
        categoryId = idCategory;
    }

    return (
        <>            
            {/* <div style={{color:"green", margin:"25px",fontSize: "2rem", alignContent:"center"}}>{greeting}</div> */}
            {/* <div className="greeting">{greeting}</div> */}
            {
                visible ? (
                <div className="greeting">
                    <Message
                        onDismiss={handleDismiss}
                        header={greeting}
                        content='Esta es una notificación especial que puede descartar.'
                    />
                </div>) : (
                <div className="greeting">
                    The message will return in 15s...
                </div>
                )
                    
            }
            <ItemList categoryId = {categoryId} />
            {/* <ItemCount stock="7" initial="2"/>  */}
        </>
    )
}

export default ItemListContainer;