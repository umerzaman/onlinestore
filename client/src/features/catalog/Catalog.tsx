import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";



export default function Catalog(){

  const [products,setProducts] = useState<Product[]>([]); 

  useEffect(()=>{
  
    fetch('http://localhost:5091/api/products')
    .then(response=>response.json())
    .then(data=>{setProducts(data)})
  
  },[])
  
  function addProduct(){
   setProducts(prevState=>[...prevState,
    {
      id:prevState.length + 101,
      name: "product "+prevState.length + 101,
      brand: "Brand "+prevState.length + 101,
      price:(prevState.length * 100) + 100,
      description: "Description " + prevState.length +100,
      pictureUrl: "asdasdasd ",
      quantityInStock: prevState.length + 1,
    }
   ])
  }

    return(
        <>
       <ProductList products={products} addProduct={addProduct}></ProductList>
      </>
    )
}