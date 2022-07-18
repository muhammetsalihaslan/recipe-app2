import HomeStyle from './Home.style';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../component/header/Header';


const Home = () => {
   const APP_ID = "1c27efd7";
   const APP_KEY = 
 "8fa9e8034a26346589c7b932c5904f74";
  
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("")
  const [recipes, setRecipes] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
        
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    getData();
  }, [])

    return(
        <div>
         <Header setQuery={setQuery} 
         setSelectedMeal={setSelectedMeal}
         mealType={mealType}/>

        </div>
    )
}

export default Home;