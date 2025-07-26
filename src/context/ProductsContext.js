// At First I have decided to use Redux Toolkit, then Redux beocomes usefull when we have multiple functions to dispatch like manipulating data multiple time, but in our ap we have to just pass products array to whole app, so i have used context api due to lack of time!
import { createContext } from 'react';
const ProductsContext = createContext(null);
export default ProductsContext;
