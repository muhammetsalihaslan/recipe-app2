import { Button, 
    FoodInput, 
    FormContainer, 
    HeaderContainer, 
    MainHeader, 
    Select } from './Header.style';

const Header = ({setQuery, setSelectedMeal, mealType}) => {
    return (
        <HeaderContainer>
        <MainHeader>
            Recipe App
        </MainHeader>
        <FormContainer>
           <FoodInput
           type="text"
           placeholder="search"
           onChange={(e) => setQuery(e.target.value)}/>
        <Button type="submit">Search</Button>
        <Select 
        name="mealType" 
        id="mealType"
        onChange={(e) => setSelectedMeal(e.target.value)}>
            {mealType.map((meal, index) =>(
                <option key={index} value={meal.toLowerCase()}>{meal}</option>
            ))}
        </Select>
           
        </FormContainer>
        </HeaderContainer>
    )
};

export default Header;