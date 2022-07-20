import { Button, Card, Header, Image, MainContainer } from './Cards.style';
import defaultImage from '../../assets/default-image.jpg';


const Cards = ({recipes}) => {
    return <MainContainer wrap="wrap">
    {recipes.map(({recipe}, index)=>(
    <Card key={index}>
    <Header>{recipe.label}</Header>
    <Image src={recipe.image || defaultImage }/>
    <Button>View More</Button>

    </Card>
    ))}
    </MainContainer>

    
    
}

export default Cards;