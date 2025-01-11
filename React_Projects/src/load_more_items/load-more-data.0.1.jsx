import { useEffect, useState } from "react";

const LoadData01 = () => {
  const [data, setdata] = useState([]);
  const [count, setCount] = useState(0);

  async function loadProducts() {
    try {
      const loadNewProducts = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=${
          count === 0 ? 0 : count * 5
        }`
      );
      const result = await loadNewProducts.json();
      if (result && result.length) {
        setdata((d) => [...d, ...result]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadProducts();
  }, [count]);

  return (
    <div>
      {data.map((products) => (
        <p key={products.id}>{products.name}</p>
      ))}
      <button onClick={() => setCount(count + 1)}>button</button>
    </div>
  );
};

export default LoadData01;
