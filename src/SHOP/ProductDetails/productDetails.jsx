import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategoriesAndDocument } from "../../Asset/firebase";
import { addToCart } from "../../store/cart/cart-reducer";
import { selectCartTotal } from "../../store/cart/cart-selector";
import './productDetail.css'

const ProductDetails = () => {
  const [theProduct, setTheProduct] = useState({});
  const CartTotal = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  // const addToCartHandler = ()=> dispatch(addToCart())
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    const categories = async () => {
      const categoryMap = await getCategoriesAndDocument();
      setTheProduct(categoryMap);
    };

    categories();
  }, []);

  return (
    <div>
      {Object.keys(theProduct).map((value) => {
        const theMainProduct = theProduct[value];
        return theMainProduct.map((value) => {
          if (value.name === productId) {
            return (
              <div key={value.id} className="product_details_wrapper">
                <div className="Product_Img">
                  <img src={value.imageUrl} />
                </div>
                <div className="Product_content">
                  <div className="product_desp">
                    <h1>{value.name}</h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet sequi in placeat facere nisi, dignissimos odio
                      fugit ratione aliquid accusantium vero perspiciatis ipsa,
                      laborum facilis molestias ut corporis quos minima.
                    </p>
                  </div>
                  <div className="productTotal">
                    <h3>{CartTotal}</h3>
                    <button onClick={() => { }}>Add TO Cart</button>
                    <p><Link to='/shop'>back to the shop</Link></p>
                  </div>
                </div>
              </div>
            );
          }
        });
      })}
    </div>
  );
};

export default ProductDetails;
