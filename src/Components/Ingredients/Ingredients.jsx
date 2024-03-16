import PropTypes from 'prop-types';

const Ingredients = ({ingredient}) => {
    return (
        <li>{ingredient}</li>
    );
};

Ingredients.propTypes ={
    ingredient : PropTypes.string,
}

export default Ingredients;