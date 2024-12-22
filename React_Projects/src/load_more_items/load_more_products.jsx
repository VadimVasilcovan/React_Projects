import { useState, useEfect } from "react";
import "../load_more_items/load_more_items.css";

const ImportMoreProducts = () => {
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
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEfect(() => {
    fetchProducts();
  }, [count]);

  useEfect(() => {
    setDisableButton(() => {
      if (products && products.length === 100) setDisableButton(true);
    });
  }, [products]);

  if (loading) {
    return <div>Loading data ! please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && productsLength === 100
          ? products.map((item) => (
              <div className="product-container" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You  reached to 100 product</p> : null}
      </div>
    </div>
  );
};

export default ImportMoreProducts;
