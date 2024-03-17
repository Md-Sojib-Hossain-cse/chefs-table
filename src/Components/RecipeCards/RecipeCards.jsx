import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import PropTypes from 'prop-types';

const RecipeCards = ({handleWantToCook}) => {
    const [recipeCards, setRecipeCards] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setRecipeCards(data))
    }, [])

    return (
        <div className="col-span-1 lg:col-span-2  grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                recipeCards.map((cardData , index) => <RecipeCard key={index} cardData={cardData} handleWantToCook={handleWantToCook}></RecipeCard>)
            }
        </div>
    );
};

RecipeCards.propTypes ={
    handleWantToCook : PropTypes.func.isRequired,
}

export default RecipeCards;