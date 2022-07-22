import { createContext } from "react";
import { ProductInterface } from "../interfaces";

// Creating the context object and passing the default values.
export const ImageContext = createContext<Array<ProductInterface>>([]);
