
import "./cart-icon.css"
import { ReactComponent as ShoppingIcon } from "../../../Asset/shopping-bag.svg"
import { setIsCartOpen } from "../../../store/cart/cart-reducer"
import { useDispatch, useSelector } from "react-redux"
import { selectIsCartOpen,selectCartCount } from "../../../store/cart/cart-selector"
// import { Cartcontext } from "../CartContext/cartContext.component"

const CartIconcomponent = () => {
const dispatch = useDispatch()
 
  const isCartOpen = useSelector(selectIsCartOpen)

  const cartCount = useSelector(selectCartCount);


const toggler=()=>{
  dispatch(setIsCartOpen(!(isCartOpen))) 
}


  return (
    <div className="cart-icon-container" onClick={toggler}>
      <ShoppingIcon className="Thecart-icon" />
      <span>{cartCount}</span>
    </div>
  )
}

export default CartIconcomponent
