const ImportMoreItems = () => {
  const [loading, setLoading] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState([]);
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
        setFetchedProducts((prevData) => [...prevData, ...result.products]);
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
    setDisableButton(() => {
      if (fetchedProducts && fetchedProducts.length === 100) setDisableButton(true);
    });
  }, [fetchedProducts]);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="loda-more-container">
      <div className="product-container">
        {fetchedProducts && fetchedProducts.length
          ? fetchedProducts.map((item) => (
              <div className="product-div" key={item.id}>
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
        {disableButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
};

export default ImportMoreItems;
