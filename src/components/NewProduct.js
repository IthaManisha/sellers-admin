import React from "react";
import Card from "./UI/Card";

const NewProduct=(props)=>{
    let sum=0;
    for (const product of props.products) {
        sum += parseInt(product.sellingPrice);
    }
    return(
        <Card>
        <h1>Products</h1>
        <ul>
          {props.products.map((product)=>
            (<li key={product.id}>{product.sellingPrice} - {product.productName}  <button onClick={()=>props.onDeleteProduct(product.id)}>delete</button></li>
            
            ))}
        
        </ul>
        <b>Total Worth Of Products:{sum}</b>

        </Card>
    )
}
export default NewProduct;
//{props.products.reduce((accumulator, product) => accumulator + parseInt(product.sellingPrice), 0)}