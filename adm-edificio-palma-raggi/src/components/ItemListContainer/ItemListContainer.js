import React from 'react'

export default function ItemListContainer({greeting}) {
    return (
        // <div className="greeting">
        <div style={{color:"green", margin:"25px",fontSize: "2rem", alignContent:"center"}}>
            {greeting}
        </div>
    )
}
