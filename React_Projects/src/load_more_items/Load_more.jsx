import { useEffect, useState } from "react";

const LoadMoreCripto = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchData() {
    try {
      const LoadData = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${(count ===
          0 ? 0 : count * 20)}`
      );
      const result = await LoadData.json();
      if (result && result.length) {
        setData((d) => [...d, ...result]);
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
      {data.map((Cripto) => (
        <p key={Cripto.id}>{Cripto.name}</p>
      ))}
      <button onClick={() => setCount(count + 1)}>Load_more</button>
    </div>
  );
};

export default LoadMoreCripto;
