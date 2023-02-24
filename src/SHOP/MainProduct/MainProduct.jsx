import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { theIsloading } from "../../store/product/product.action";
import Test from "../../test/test";
import ProductCard from "../shopComponent/shop.component";
import { ProductContextShop } from "../shopContext/shopContext";
import "./MainProduct.css";
const MainProduct = () => {
  const { title } = useParams();

  const TheProducts = useSelector((state) => state.products.TheProducts);

  const [reallProduct, setreallProduct] = useState(TheProducts[title]);

  const isloading = useSelector(theIsloading);
  useEffect(() => {
    setreallProduct(TheProducts[title]);
  }, [title, TheProducts]);
  return (
    <>
      {isloading ? (
        <Test />
      ) : (
        <div className="mainProductDiv">
          {reallProduct &&
            reallProduct.map((value) => (
              <ProductCard key={value.id} thevalue={value} />
            ))}
        </div>
      )}
    </>
  );
};

export default MainProduct;
