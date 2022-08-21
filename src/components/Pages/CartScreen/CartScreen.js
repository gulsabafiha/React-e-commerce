import React, { useEffect }  from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../../actions/cartActions';
import Message from '../Message';

const CartScreen = () => {
  const { id}=useParams();
  const navigate=useNavigate();
  const qty=window.location.search ?Number( window.location.search.split('=')[1]):1;
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart.cartItems)
 
  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,qty))
    }
  },[dispatch,id,qty])

  const removeFromCartHandler=(id)=>{
   dispatch(removeFromCart(id))
  }

  const checkoutHandler=()=>{
    navigate('/shipping')
  }

  return (
    <>
  
    <div className='container mt-4'>
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {
          cart.length===0?(
            <Message variant='info'>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) :(
            <ListGroup variant='flush'>
              {
                cart.map(item=>(
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                      <Image src={item.image} lat={item.name} fluid rounded></Image>
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>
                        ${item.price}
                      </Col>
                      <Col md={3}>
                      {item.qty}
                      </Col>
                      <Col md={1}>
                        <Button
                        type='button'
                        variant='light'
                        onClick={()=>removeFromCartHandler(item.product)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>

                    </Row>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          )
        }
      </Col>
     <Col md={4}>
       <Card>
         <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>SubTotal({cart.reduce((acc,item)=>acc+item.qty,0)}) items</h2>
            ${cart.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)}
          </ListGroup.Item>
         </ListGroup>
         <ListGroup.Item>
           <Button
           type='button'
           className='btn-block'
           disabled={cart.length===0}
           onClick={()=>checkoutHandler()}
           >
             Proceed To Chekcout
           </Button>
         </ListGroup.Item>
       </Card>
     </Col>
    </Row>
    </div>

    </>
  )
}

export default CartScreen;