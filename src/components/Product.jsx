import Infocardproduct from './infocardproduct.jsx';
import useUsers from '../services/useproducts.js'; // Import the missing useProducts function
import { useParams } from "react-router-dom";

const Product = () => { // Rename the function to start with an uppercase letter
  const { products, loading, error} = useUsers(); // Wrap the useProducts hook inside a custom hook function
  let id = useParams().id-1;
  return (
    <div>
      {products && <Infocardproduct instancia={products.products[id]}/>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
    </div>
  )
}

export default Product;