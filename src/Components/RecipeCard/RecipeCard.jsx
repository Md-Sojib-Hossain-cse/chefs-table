import '../../Utility/Utility.css';
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';
import Ingredients from '../Ingredients/Ingredients';


const RecipeCard = ({ cardData  , handleWantToCook}) => {


    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = cardData;


    return (
        <div className="col-span-1 p-6 border-[1px] border-[#28282833] rounded-2xl gap-4 md:gap-6 flex flex-col justify-between">
            {/* recipe image  */}
            <div>
                <div className="h-48 w-full rounded-3xl mb-6">
                    <img src={recipe_image} alt="" className="h-full w-full rounded-2xl" />
                </div>
                {/* details */}
                <div>
                    <h4 className="font-lexend text-[#282828] text-xl font-semibold leading-6 mb-4">{recipe_name}</h4>
                    <p className='font-fira-sans text-[#878787] text-lg font-normal leading-7 pb-4'>{short_description}</p>
                </div>
                <div className='pt-6 border-t-[1px] border-[#2828281A] pb-4'>
                    <h5 className='font-lexend text-[#282828] text-lg font-medium leading-6 mb-4'>Ingredients: <span>{ingredients.length}</span></h5>
                    <ul className='font-fira-sans text-[#878787] text-lg font-medium leading-8 list-disc list-inside'>
                        {
                            ingredients.map((ingredient, index) => <Ingredients key={index} ingredient={ingredient}></Ingredients>)
                        }
                    </ul>
                </div>
            </div>
            <div className='pt-6 border-t-[1px] border-[#2828281A]'>
                <div className='flex gap-4 font-fira-sans text-[#282828CC] text-base font-normal leading-5 mb-4 md:mb-6'>
                    <div className='flex gap-2'><IoMdTime /> <p>{preparing_time} minutes</p></div>
                    <div className='flex gap-2'><FaFire /> <p>{calories} calories</p></div>
                </div>
                <button onClick={() => handleWantToCook(cardData)} className='font-lexend text-[#150B2B] text-lg font-medium leading-6 bg-[#0BE58A] hover:bg-[#B2FFDE] rounded-[50px] py-3 px-6 transition duration-500'>Want to Cook</button>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    cardData: PropTypes.object.isRequired,
    handleWantToCook : PropTypes.func.isRequired,
}

export default RecipeCard;