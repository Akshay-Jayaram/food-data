import { useEffect } from "react";

const PopularFood = () => {

    useEffect(()=>{
        getPopular();
    },[])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_KEY}&number=10`);
        const data = await api.json();
        console.log(data);
    }

  return (
    <div>PopularFood</div>
  )
}

export default PopularFood