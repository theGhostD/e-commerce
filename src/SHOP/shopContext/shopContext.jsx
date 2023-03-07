import { useReducer} from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getCategoriesAndDocument } from "../../Asset/firebase";
import { createAction } from "../../Asset/reducer/reducer.utils";
import { userActionType } from "../../store/user/user.actionTypes";

export const ProductContextShop = createContext({
  TheProducts: {},
  // TheHat : false,
  // handler : ()=>{}
});

const initialState = {
  TheProducts: {},
};

const ProductReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case userActionType.getProducts:
      return {
        ...state,
        TheProducts : payload
      };
  }
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { TheProducts } = state;

  console.log(TheProducts);
  // const [TheProducts, getProducts] = useState({});
  // const [TheHat,SetTheHat] = useState(false)

  const getProducts = (product) => {
    dispatch(createAction(userActionType.getProducts, product));
  };

  useEffect(() => {
    const categories = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap);
      getProducts(categoryMap);
    };

    categories();
  }, []);

  const value = { TheProducts };

  return (
    <ProductContextShop.Provider value={value}>
      {children}
    </ProductContextShop.Provider>
  );
};
