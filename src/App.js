import { Badge, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function App() {
  const data = [
    {
      productName : "poco x4 pro 5G",
      price : 20000,
      productImage : "https://rukminim1.flixcart.com/image/832/832/l19m93k0/mobile/b/8/b/-original-imagcv2dnrqhzqbu.jpeg?q=70",
      rating : "⭐⭐⭐⭐⭐",
    },
    {
      productName : "poco m4 pro 5G",
      price : 16000,
      productImage : "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/mobile/d/s/g/-original-imagbnymy5bgwyqn.jpeg?q=70",
      rating : "⭐⭐⭐⭐⭐",
    },
    {
      productName : "poco x3 pro",
      price : 16000,
      productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31u0JDsbHdL.jpg",
      rating : "⭐⭐⭐⭐",
    },
    {
      productName : "poco m3 ",
      price : 12000,
      productImage : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/410eNbTI+fL.jpg",
      rating : "⭐⭐⭐",
    },
  ]
  const [count,setcount]=useState(0);
  return (
    <div className="App">
    <Nav
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="/home">welcome</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">New Arrrivals</Nav.Link>
      </Nav.Item>
    </Nav>
     <div className="cart-value">
       <Badge bg="success">
        CART {count}
      </Badge>
      </div>
      <div className='card-container'>
      {data.map((prod,idx)=><Cards 
      idx = {idx}
      prod={prod}
      setcount={setcount}
      count={count}
      />)}
      </div>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; poco showroom <span>2023</span>
          </p>
        </div>
      </footer>
      </div>
  );
}

export default App;
function Cards({prod,idx,setcount,count}){
  const[show,setshow]=useState(false);
 
  function addToCart(){
    setshow(!show)
    setcount(count + 1)
  }
  function removeFromCart(){
    setshow(!show)
    setcount(count - 1)
  }
  return (
  
    <Card key = {idx} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>RS {prod.price}</Card.Text>
          <Card.Text>{prod.rating}</Card.Text>
          {!show ?<Button 
          variant="primary"
          onClick={addToCart}
          >Add cart</Button> : ""}
          
          {show ? <Button 
          variant="danger"
          onClick={removeFromCart}
          >Remove cart</Button> : ""}
        </Card.Body>
      </Card>


  
  )
}