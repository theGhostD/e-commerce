import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getCategoriesAndDocument } from "../../Asset/firebase";
import MainProduct from "../MainProduct/MainProduct";
import ProductPreview from "../Product-Preview/Product.preview";
// import { getProducts } from "../../store/product/product.action";
import { getProducts } from "../../store/product/product.reducer";
import { useDispatch, useSelector } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();

  const TheProducts = useSelector((state) => state.products.TheProducts);
  console.log(TheProducts);
  
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
    </Routes>
  );
};

export default Shop;
