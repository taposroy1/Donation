import { useState } from "react";
import PropTypes from 'prop-types';

const Banner = ({handleSearchValue}) => {

  const [value, setValue] = useState("");

  const searchCategory = () => {
      handleSearchValue(value);
  }
  // console.log(JSON.parse(value));

  // console.log(data.filter(item => item.category.toLowerCase() === "FooD".toLowerCase()));
 
    return (
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: `url('https://i.ibb.co/qgpZ9xm/banner.jpg')`,
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>

            <div className="form-control">
              <div className="input-group  justify-center">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  placeholder="Search here by category..."
                  className="input md:w-[400px] input-bordered border-[#DEDEDE]  text-red-600 font-semibold placeholder:text-[#0b0b0b5e] placeholder:font-normal -mr-1 focus:outline-none"
                />
                <button onClick={searchCategory} className="btn hover:bg-[#0052FF]  bg-[#FF444A] text-white font-semibold active:hover:transform-none">
                 Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
Banner.propTypes = {
  handleSearchValue: PropTypes.func.isRequired,
}
export default Banner;
