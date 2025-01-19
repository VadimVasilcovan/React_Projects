import { useState, useEffect, useRef } from "react";

export default function ScrollTopBottom() {
  const [fetchedData, setFetchedData] = useState([]);
  async function getData() {
    try {
      const data = await fetch`https://dummyjson.com/products?limit=100`;
      const result = await data.json();
      setFetchedData(result.products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const bottomRef = useRef(null);
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleScrollToBottom}>to the bottom</button>
      {fetchedData.map((data) => (
        <p key={data.id}>{data.title}</p>
      ))}
      <button onClick={handleScrollToTop}> to the top</button>
      <div ref={bottomRef}></div>
      <p>the bottom</p>
    </div>
  );
}
