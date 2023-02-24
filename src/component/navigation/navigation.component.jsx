import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import Thelogo from '../navigation/reverse.jpg'
import '../navigation/navigation.css'
import { SignOutUser } from "../../Asset/firebase"
import { useContext } from "react"
import { UserContext } from "../../Acontext/realContext"
import CartIconcomponent from "../../SHOP/Cart/cart_Icon/cartIcon.component"
import CartDropdowncomponent from "../../SHOP/Cart/cart-Dropdown/cartDropdown.component"
import { useSelector } from "react-redux"
import { selectIsCartOpen } from "../../store/cart/cart-selector"


const Navigation = () => {
    const currentUser = useSelector((state)=> state.user.currentUser)

    const isCartOpen = useSelector(selectIsCartOpen)
    return (
        <Fragment>
            <nav>
                <div className="nav-container">
                    <Link className="logo-container" to='/'>
                        <img src={Thelogo} alt="logo" className="logo-img" />
                    </Link>

                    <div className="links-con">
                        <Link to='/shop' className="Link">shop</Link>
                        {
                            (currentUser) ? (

                                <Link to='/SignIn' className="Link" onClick={ SignOutUser}>Sign Out</Link>
                            )
                                : (<Link to='/SignIn' className="Link">Sign In</Link>)
                        }
                        <CartIconcomponent />
                    </div>
                </div>
                {
                  (isCartOpen && <CartDropdowncomponent/>)
                  
                }
                
            </nav>

            <Outlet />
        </Fragment>
    )
}
export default Navigation