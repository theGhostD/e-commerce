import "./cart-item.css"

const CartItemComponent = ({theArr}) => {
  const {name,quantity,price,imageUrl} = theArr;
  return (
    <div className="container-Div">
      <div className="img-div">
        <img src={imageUrl} alt="" />
      </div>
      <div>
      <h4>{name}</h4>
       <span>{quantity} </span>
       <span>x ${price}</span>
      </div>
       
    </div>
  )
}

export default CartItemComponent
