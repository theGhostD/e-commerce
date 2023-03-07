import React, { useContext } from 'react'
import "./cartDropdown.css"
import CartItemComponent from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CartDropdowncomponent = () => {
  const CartItem = useSelector(state => state.cart.CartItem);

  return (


    <div className="testing">
      <div className='CartDropdown-container' >
        <div className="cartDropIn">
          {
            CartItem.length === 0 ? (<div>
              <h1> Cart is empty</h1>
            </div>) :
              (CartItem.map((value) => <CartItemComponent theArr={value} key={value.id} />))

          }
        </div>
        <button className='btn8'><Link to="/checkout" className='Btn_LInk'>CheckOut</Link></button>

      </div>
    </div>
  )
}

export default CartDropdowncomponent
