import { useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );

    if (response && response.data) setProducts(response.data);
  };

  return { products, fetchProducts };
}

export default useProducts;
