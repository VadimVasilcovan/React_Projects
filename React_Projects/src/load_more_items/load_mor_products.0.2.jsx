import { useState, useEffect } from "react";

const LoadMoreProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      if(result && result.products && result.products.length){
        setProducts((PrevData) => [...PrevData, result.products]);
        setLoading(false)
      }
      console.log(result);
    } catch (e) {
        console.log(e)
        setLoading(false);

    }
  }

  useEffect(() => {
    fetchProducts();
  },[count]);

  useEffect(() => {
    if (products && products.length === 100)setDisableButton(true);
  },[products]);


  return <></>;
};

export default LoadMoreProducts;
