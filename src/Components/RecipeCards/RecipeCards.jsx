import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeCards = () => {
    return (
        <div className="col-span-1 lg:col-span-2  grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecipeCard></RecipeCard>
        </div>
    );
};

export default RecipeCards;