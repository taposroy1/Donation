import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {
    const {id, picture, title, category, main_color, secondary_color, tertiary_color} = card || {};

    return (
        <div>
            
            <Link to={`/donation/${id}`}>
            <div className="border rounded-lg hover:cursor-pointer" style={{backgroundColor: secondary_color}}>
                    <img className="w-[100%]" src={picture} alt="" />
                   
                    <h1 className="inline-block p-1 mx-4 mt-3 text-center text-sm font-medium rounded" style={{color:tertiary_color, backgroundColor:main_color}}> {category} </h1>
                  
                    <h1 className="font-semibold text-lg mx-4 my-4" style={{color:tertiary_color}}> {title} </h1>
                </div>
            </Link>
            
        </div>
    );
};

Cards.propTypes = {
    card: PropTypes.object.isRequired,
}
export default Cards;