import '../../Utility/Utility.css';
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";


const RecipeCard = () => {
    return (
        <div className="col-span-1 p-6 border-[1px] border-[#28282833] rounded-2xl gap-4 md:gap-6">
            {/* recipe image  */}
            <div className="h-48 w-full rounded-3xl">
                <img src="" alt="" />
            </div>
            {/* details */}
            <div>
                {/* recipe name and  description */}
                <div>
                    <h4 className="font-lexend text-[#282828] text-xl font-semibold leading-6 mb-4">Spaghetti Bolognese</h4>
                    <p className='font-fira-sans text-[#878787] text-lg font-normal leading-7 pb-4'>Classic Italian pasta dish with savory meat sauce.</p>
                </div>
                {/* ingredients  */}
                <div className='pt-6 border-t-[1px] border-[#2828281A] pb-4'>
                    <h5 className='font-lexend text-[#282828] text-lg font-medium leading-6 mb-4'>Ingredients: <span>6</span></h5>
                    <ul className='font-fira-sans text-[#878787] text-lg font-medium leading-8 list-disc list-inside'>
                        <li>500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ul>
                </div>
                {/* buttons and others */}
                <div className='pt-6 border-t-[1px] border-[#2828281A]'>
                    <div className='flex gap-4 font-fira-sans text-[#282828CC] text-base font-normal leading-5 mb-4 md:mb-6'>
                        <div className='flex gap-2'><IoMdTime /> <p>30 minutes</p></div>
                        <div className='flex gap-2'><FaFire /> <p>600 calories</p></div>
                    </div>
                    <button className='font-lexend text-[#150B2B] text-lg font-medium leading-6 bg-[#0BE58A] hover:bg-[#B2FFDE] rounded-[50px] py-3 px-6 transition duration-500'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;