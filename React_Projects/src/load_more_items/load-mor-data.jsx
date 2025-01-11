import { useEffect, useState } from "react";

const GetData = () => {
  const [data, setdata] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
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
  }, []);

  return (
    <>
      {data.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
  );
};

export default GetData;
