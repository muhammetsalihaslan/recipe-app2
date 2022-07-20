import  { HeaderText, HomeImg, ImgDiv } from './Home.style';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import homeSvg from '../../assets/home.svg';



const Home = () => {
   const APP_ID = "b6e71300";
   const APP_KEY = 
 "70857a50477dc964c1b97b8ee03738f1";
  
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0])
  const [recipes, setRecipes] = useState(null);

   const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      
      try {
          const { data } = await axios.get(url);
          setRecipes(data.hits);
          
      } catch (error) {
          console.log(error)
      }
    } else {
      alert('Please Enter a query')
    }
  };

  console.log(recipes)

  // useEffect(() => {
  //   getData();
  // }, [])

    return(
        <div>
         <Header setQuery={setQuery} 
         setSelectedMeal={setSelectedMeal}
         mealType={mealType}
         getData={getData}/>
         {!recipes && (
           <ImgDiv>
             <HomeImg src={homeSvg}/>
           </ImgDiv>
         )}

         {recipes?.length === 0 && (
          <HeaderText>The Food Can not be found</HeaderText>
         )}
         {recipes?.length > 0 && <Cards recipes={recipes}/>}
          

        </div>
    )
}

export default Home;