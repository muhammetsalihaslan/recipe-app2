import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './Header.style';

const Header = ({setQuery, setSelectedMeal}) => {
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

        </Select>
           
        </FormContainer>
        </HeaderContainer>
    )
};

export default Header;