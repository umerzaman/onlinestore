import React, { useEffect, useState } from 'react';
import { Product } from './product';

function App() { 
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


  return (
    <div className="App">
      <h1>Online store</h1>
      <ul>
        {
          products.map(product =>(
          <li key={product.id}> {product.name}</li>
        ))
        }
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;
