import React ,{useContext} from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const navigate = useNavigate();
  const {cartItems, food_list, removeFromCart, getTotalCartAmount,url} = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Tittle</p> 
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item,index)=>{
        if (cartItems[item._id]>0) { 
          return (
            <div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price*cartItems[item._id]).toFixed(2)}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              
              </div>
              <hr />
            </div>
          )
        }
      })}
      <div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery free</p>
                <p>${getTotalCartAmount===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
              <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>
                If you have a promo code, please enter it here
              </p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='Enter your code here' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart