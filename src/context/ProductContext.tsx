import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import { Product } from "../types";
import { initialProducts } from "../data";

type Action =
  | { type: "ADD"; payload: Product }
  | { type: "UPDATE"; payload: Product }
  | { type: "DELETE"; payload: number };

const productReducer = (state: Product[], action: Action): Product[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map(p => (p.id === action.payload.id ? action.payload : p));
    case "DELETE":
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
};

type ProductContextType = {
  products: Product[];
  dispatch: Dispatch<Action>;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  dispatch: () => null,
});

type Props = { children: ReactNode };

export const ProductProvider = ({ children }: Props) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);
  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
