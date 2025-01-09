import { useState } from "react"




const LoadMoreProducts = () => {
    const [loading, setLoading] = useState(false)
    const [produts, setProducts] = useState[]
    const [count, setCount] = useState(false)



    async function fetchProducts () {
        try{
            const response = await fetch (
                `https://pokeapi.co/api/v2/pokemon?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`
            )

        }catch(e){

        }
    }
    return{

    }
}

export default LoadMoreProducts