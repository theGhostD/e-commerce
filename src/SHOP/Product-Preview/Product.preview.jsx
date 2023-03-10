
import { useSelector } from "react-redux";
import { theIsloading } from "../../store/product/product.action";
import "./preview.css";
import PreviewComponent from "./previewComponent";

const ProductPreview = () => {
  const TheProducts = useSelector((state) => state.products.TheProducts);
  const isloading = useSelector(theIsloading);
  console.log(isloading);

  return (
    <>
      {Object.keys(TheProducts).map((Title) => {
        const realProducts = TheProducts[Title];
        console.log(realProducts)
        return (
              <PreviewComponent
                theArr={realProducts}
                theTitle={Title}
                key={Title}
              />
            )}
            
        )
      }
    </>
  )
};

export default ProductPreview;
