import React from 'react';
import './popular.css'
// import Item from '../item/item'
import data_product from '../assets/pages/data';
import items from '../item/item';
 
const Popular =()=>{
    return(
       <div className="toprated">
        <h1>top rated by most readers</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((Items,i)=>{
                return <items key={i} id={Items.id} image={Items.image}>
            })}
        </div>
       </div>

    );
}
export default Popular;