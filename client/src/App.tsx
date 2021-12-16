import React, { useEffect, useState } from 'react';

function App() { 
  const [products,setProducts] = useState([
    {name:'product1',price:'100'},
    {name:'product1',price:'100'}
    ]); 

useEffect(()=>{

  fetch('http://localhost:5091/api/products')
  .then(response=>{})
  //.then(data=>{setProducts(data)})

},[])

function addProduct(){
  // setProducts(prevState => [...prevState,
  //   {name:'product '+ (prevState.length+1),price:(prevState.length*100)+100 }])
}


  return (
    <div className="App">
      <h1>Online store</h1>
      <ul>
        {
          products.map((item,indexKey) =>
          <li key={indexKey}>{item.name}</li>
        )
        }
      </ul>
    </div>
  );
}

export default App;
