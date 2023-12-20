import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({data}) => {
    const {id, picture, category, title, price, main_color, secondary_color, tertiary_color} = data;
    return (
      <div>

        <div className="border rounded-lg flex flex-row w-full lg:w-[500px] xl:w-[600px]" style={{backgroundColor: secondary_color}}>
                    <img className="w-1/3" src={picture} alt="" />
                   
                   <div>
                   <h1 className="inline-block p-1 mx-4 mt-4 text-center text-sm font-medium rounded" style={{color:tertiary_color, backgroundColor:main_color}}> {category} </h1>
                  
                  <h1 className="font-semibold text-lg mx-4 my-2 text-black"> {title} </h1>
                  <h1 className="font-semibold text-lg mx-4" style={{color:tertiary_color}}> ${price} </h1>
                  <Link to={`/donation/${id}`}>
                  <div className="flex mx-4 my-4">
                  <button
              className="p-1 md:p-2 rounded text-xl font-semibold text-white"
              style={{ backgroundColor:tertiary_color }}
            >
              View Details
            </button>
                  </div>
                  </Link>
                   </div>
                </div>
      </div>
    );
};
DonationCard.propTypes = {
    data: PropTypes.object.isRequired,
}
export default DonationCard;