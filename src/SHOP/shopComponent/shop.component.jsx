import React from 'react'
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/cart-reducer';
import "./shopComponent.css"


const ProductCard = ({ thevalue }) => {
    const dispatch = useDispatch()
    // console.log(thevalue)
    const { price, name, imageUrl } = thevalue;
    const CartItem = useSelector(state => state.cart.CartItem)

    const theHandler = () =>dispatch(addToCart(thevalue))
    
    return (
        <div className="container">
            <button className='btn6' onClick={theHandler}>Add to Cart</button>
            <div className='wrapper' >
                <img src={imageUrl} alt="" className='image2' />
                <div className="product_details" >
                    <span className="Productname" >{name}</span>
                    <span className="productPrice" >{price}</span>
                </div>

            </div>

        </div>
    )
    }
    export default ProductCard
