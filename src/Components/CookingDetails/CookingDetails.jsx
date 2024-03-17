import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import TCCount from "../TCCount/TCCount";
import WantToCook from "../WantToCook/WantToCook";
import PropTypes from "prop-types";

const CookingDetails = ({wantToCook , handleCurrentlyCook , currentlyCook , totalCookTime , totalCalories}) => {
    return (
        <div className="col-span-1">
            <div className="border-[1px] border-[#28282833] rounded-2xl">
                <div>
                    <h3 className="text-[#282828] font-lexend text-2xl font-semibold leading-7 text-center w-10/12 mx-auto pb-4 pt-8 border-b-[1px] border-[#28282826]">Want to cook: {wantToCook.length}</h3>
                    <table className="w-full mt-6">
                        <thead>
                            <tr className="text-[#878787] font-fira-sans text-base font-medium leading-5 flex justify-around items-center pb-4 px-4 w-full">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wantToCook.map((items , index) => <WantToCook key={items.recipe_id} index={index} items={items} handleCurrentlyCook={handleCurrentlyCook}></WantToCook>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="pb-10 md:pb-12">
                    <h3 className="text-[#282828] font-lexend text-2xl font-semibold leading-7 text-center w-10/12 mx-auto pb-4 pt-8 border-b-[1px] border-[#28282826]">Currently cooking: {currentlyCook.length}</h3>
                    <table className="w-full mt-6">
                        <thead>
                            <tr className="text-[#878787] font-fira-sans text-base font-medium leading-5 flex justify-around items-center pb-4 px-4">
                                <th className="w-4"></th>
                                <th className="w-24">Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentlyCook.map((ccItem , index) => <CurrentlyCooking key={ccItem.recipe_id} ccItem={ccItem} index={index}></CurrentlyCooking>)
                            }
                        </tbody>
                    </table>
                    <TCCount totalCookTime={totalCookTime} totalCalories={totalCalories}></TCCount>
                </div>
            </div>
        </div>
    );
};


CookingDetails.propTypes = {
    wantToCook : PropTypes.array.isRequired,
    handleCurrentlyCook : PropTypes.func.isRequired,
    currentlyCook : PropTypes.array.isRequired,
    totalCookTime : PropTypes.number.isRequired,
    totalCalories : PropTypes.number.isRequired,
}



export default CookingDetails;