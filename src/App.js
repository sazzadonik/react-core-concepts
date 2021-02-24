import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: "Adobe Photoshop", price: 10},
    {name: "Adobe illustrator", price: 50}
  ];

  let nayoks = ["Jashim", "razzak", "rubel"];
  let productArr = products.map( element => element.name);
  console.log(productArr)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Users></Users>
        <Counter></Counter>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            products.map(product =><Product product = {Product.name}></Product>)
        
          }
        </ul>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);

  return (
    <div>
      <h1>{users.length}</h1>
      <ul>
        {
          users.map((user)=>
          <li>{user.name}</li>
        )}
      </ul>
    </div>
  );

}
function Counter(){
  const [count, setState] = useState(10); 
  const handleIncrease = ()=> setState(count + 1);
  return(
    <div>
      <h1>count: {count} </h1>
      <button onClick = {handleIncrease}>Click Me</button>
    </div>
  );
}

function Product(props){
  const styleProduct = {
    width: "250px",
    height: "200px",
    border: "1px solid gray",
    borderRadius: "10px",
    float: "left",
    margin: "10px"
  }

  const buttondesign = {
    backgroundColor : "white",
    color: "#000",
    padding : "10px"
  }

return(
  
  <div style = {styleProduct}>
    <h4>{props.product.name}</h4>
    <p>price:{props.product.price}</p>
    <button style = {buttondesign}> Buy Now </button>
  </div>
);
}
export default App;
