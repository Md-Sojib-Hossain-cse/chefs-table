import PropTypes from "prop-types";

const TCCount = ({totalCookTime , totalCalories}) => {

    return (
        <div className="pt-4 flex justify-end gap-5 font-lexend text-[#282828CC] text-base font-medium leading-6 pr-5">
            <div>
                <p>Total Time =</p>
                <p>{totalCookTime} minutes</p>
            </div>
            <div>
                <p>Total Calories = </p>
                <p>{totalCalories} calories</p>
            </div>
        </div>
    );
};

TCCount.propTypes ={
    totalCookTime : PropTypes.number.isRequired,
    totalCalories : PropTypes.number.isRequired,
}

export default TCCount;