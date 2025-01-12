import { useEffect, useState } from "react"




const LoadMoreProducts = () => {
    const [loading, setLoading] = useState(false)
    const [produts, setProducts] = useState([])
    const [count, setCount] = useState(false)



    async function fetchProducts () {
        try{
            const response = await fetch (
                `https://pokeapi.co/api/v2/pokemon?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`
            );
        
        const result = await response.json();
        if (result &&  result.length){
            setProducts(((p) => [...p, ...result]));
        }
        console.log(result)
        }catch(e){
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(()=> {
        fetchProducts();
    },[count]);

    


    return{

    }
}

export default LoadMoreProducts