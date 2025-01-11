import { useEffect, useState } from "react";

const GetData = () => {
  const [data, setdata] = useState([]);
  const [count, setCount] = useState(0)

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${count === 0 ? 0 : count * 20}&sparkline=false`
      );
      const result = await response.json();
      if (result && result.length) {
        setdata((d) => [...d, ...result]);
      }
      {
        /*setdata(result);*/
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.name}
        </div>
      ))}
      <button  onClick={() => setCount(count + 1)}>Load more</button>
      
    </div>
  );
};

export default GetData;
