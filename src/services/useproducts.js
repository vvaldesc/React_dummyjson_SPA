import { useState, useEffect } from 'react'
const url = 'https://dummyjson.com/products';

const useProducts = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState('Loading');
    useEffect(() => {
      fetch((url))
        .then((data)=>data.json())
        .then((data)=>{setProducts(data); setLoading(null)})
      .catch((error) => setError(error))
    }, [])
  return (
    { products: products || null, loading: loading || null, error: error || null }
  )
}

export default useProducts