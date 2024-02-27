import List from './List.jsx';
import useProducts from '../services/useproducts.js'; // Import the missing useProducts function

const Products = () => { // Rename the function to start with an uppercase letter
  const { products, loading, error} = useProducts(); // Wrap the useProducts hook inside a custom hook function
  console.log(products)
  return (
    <div>
      {products && <List instancias={products.products}/>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
    </div>
  )
}

export default Products;
