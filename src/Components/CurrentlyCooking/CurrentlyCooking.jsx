import PropTypes from 'prop-types';

const CurrentlyCooking = ({ccItem , index}) => {
    const {recipe_name , preparing_time , calories} =ccItem;
    return (
        <tr className="font-fira-sans flex items-center justify-between gap-5 p-4 bg-[#28282808]">
            <td>{index+1}</td>
            <td className='w-24'>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};


CurrentlyCooking.propTypes ={
    ccItem : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
}

export default CurrentlyCooking;