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
      if (result && result.products && result.products.length) {
        setProducts((PrevData) => [...PrevData, result.products]);
        //This ensures that you're working with the latest state,
        //especially in situations where state updates may be asynchronous.
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }


  useEffect(() => {

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products] );
  if (loading) {
    return <div>Loading data ! please wait.</div>;
  }

  return (
    <>
      (
      <div className="load-more-container">
        <div className="product-container">

          {products && products.length
            ? products.map((item) => (
                <div className="product-div" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="buton-container">
          <button disabled={disableButton} onClick={() => setCount(count + 1)}>
            Load More Products
          </button>
          
          {disableButton ? <p>You have reached to 100 product</p> : null}
        </div>
      </div>
      )
    </>
  );
};

export default LoadMoreProducts;
