import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeCards = () => {
    const [recipeCards, setRecipeCards] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setRecipeCards(data))
    }, [])

    return (
        <div className="col-span-1 lg:col-span-2  grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                recipeCards.map(cardData => <RecipeCard key={cardData.id} cardData={cardData}></RecipeCard>)
            }
        </div>
    );
};

export default RecipeCards;