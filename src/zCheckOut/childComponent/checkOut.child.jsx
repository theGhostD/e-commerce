
import { useEffect } from "react";
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removingQuantity } from "../../store/cart/cart-reducer";
import "./checkOut.Child.css"


const CheckOutchild = ({ theObj }) => {
    // console.log(theObj)
    const { imageUrl, price, quantity, name } = theObj;
    const dispatch = useDispatch()
    
    const addQuantity = () =>dispatch(addToCart(theObj) ) ;
    const removeQuantity = () =>dispatch( removingQuantity(theObj)) ;
    const removingTheCart = () =>dispatch( removeFromCart(theObj)) 

    const Dprice = price * quantity;
    return (
        <div className="wrapperCheck">

            <div className='theContext'>

                <div className="context-container">
                    <div className="imgDiv">
                        <img src={imageUrl} />
                    </div>
                    <div className="checkContext">
                        <h2>{name}</h2>
                        <div className="testingff">
                            <div className="incre" onClick={removeQuantity}>&#60;</div>
                            <span>{quantity}</span>
                            <div className="incre" onClick={addQuantity} >&#62;</div>
                        </div>


                        <span>{Dprice}</span>

                        <span onClick={removingTheCart} className='removeBtn'>&#10060;</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckOutchild
