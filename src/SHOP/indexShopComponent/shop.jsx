import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getCategoriesAndDocument } from "../../Asset/firebase";
import MainProduct from "../MainProduct/MainProduct";
import ProductPreview from "../Product-Preview/Product.preview";
// import { getProducts } from "../../store/product/product.action";
import { getProducts } from "../../store/product/product.reducer";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "../ProductDetails/productDetails";
const Shop = () => {
  const dispatch = useDispatch();

 
  useEffect(() => {
    const categories = async () => {
      const categoryMap = await getCategoriesAndDocument();
      dispatch(getProducts(categoryMap));
    };

    categories();
  }, []);

  return (
    <Routes>
      <Route index element={<ProductPreview />} />
      <Route path=":title" element={<MainProduct />} />
      {/* <Route path=":title/:productId" element={<ProductDetails />} /> */}
    </Routes>
  );
};

export default Shop;
