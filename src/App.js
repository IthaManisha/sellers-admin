import React,{useState} from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import NewProduct from './components/NewProduct';
import Card from './components/UI/Card';

function App() {
  //const[productList,setProductList]=useState([]);
  const storedProductList = JSON.parse(localStorage.getItem('productList')) || [];
  const [productList, setProductList] = useState(storedProductList);


  const addProductHandler=(data)=>{
    const updatedProductList = [...productList, data];
    /*setProductList(()=>{
      return[...productList,data];
    })*/
    setProductList(updatedProductList);
    setProductList(updatedProductList);
    localStorage.setItem('productList', JSON.stringify(updatedProductList));
    
  }
  const deleteProduct = id => {
   /* setProductList(prevProducts=> {
      const updatedProducts = prevProducts.filter(product => product.id !== id);
      return updatedProducts;
    });*/
    const updatedProducts = productList.filter((product) => product.id !== id);
    setProductList(updatedProducts);
    localStorage.setItem('productList', JSON.stringify(updatedProducts));
    
  };
  return (
    <div>
      <Card>
      <AddProduct onSaveData={addProductHandler} />
      <NewProduct products={productList} onDeleteProduct={deleteProduct}/>
      </Card>
    </div>
  );
}

export default App;
