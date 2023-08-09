import React,{useState} from 'react'
import Card from './UI/Card';


const AddProduct=(props)=>{
    const[id,setId]=useState('');
    const[sellingPrice,setSellingPrice]=useState('');
    const[productName,setProductName]=useState('');

    const idHandler=(event)=>{
        setId(event.target.value);
        console.log(id);
    }
    const priceHandler=(event)=>{
        setSellingPrice(event.target.value);
    }
    const productNameHandler=(event)=>{
        setProductName(event.target.value);
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const productData={
            id:id,
            sellingPrice:sellingPrice,
            productName:productName
        }
        props.onSaveData(productData);
        setId('');
        setSellingPrice('');
        setProductName('');
    }
    return(
        <Card>
            <form onSubmit={onSubmitHandler}>
                <label>Product ID</label>
                <input type="text" value={id} onChange={idHandler}/>
                <label>Selling Price</label>
                <input type="number" value={sellingPrice} onChange={priceHandler}/>
                <label>Product Name</label>
                <input type="text" value={productName} onChange={productNameHandler}/><br/>
                <button type="submit" style={{borderWidth:'10px',marginLeft:'50%'}}>Add Product</button>
            </form>
        </Card>
    )

}
export default AddProduct