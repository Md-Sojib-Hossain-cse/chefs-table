import PropTypes from "prop-types";

const WantToCook = ({items , index , handleCurrentlyCook}) => {
    const {recipe_name , preparing_time , calories} = items;
    return (
        <tr className="font-fira-sans flex items-center justify-between gap-2 p-4 bg-[#28282808]">
            <td className="w-4">{index+1}</td>
            <td className="w-24">{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button onClick={() => handleCurrentlyCook(items)} className="font-lexend text-[#150B2B] text-base font-medium leading-5 bg-[#0BE58A] hover:bg-[#B2FFDE] rounded-[50px] px-2 py-2 transition duration-500">Preparing</button></td>
        </tr>
    );
};

WantToCook.propTypes ={
    items : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    handleCurrentlyCook : PropTypes.func.isRequired,
}

export default WantToCook;