import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
    const data = useLoaderData();

    const [searchValue, setSearchValue] = useState("");
    

    const handleSearchValue = (value) => {
        console.log(searchValue);
        setSearchValue(value);
        
    }
    console.log(searchValue);
	const allDonationCard = JSON.parse(data);
	const filterDonation = searchValue
	? allDonationCard?.filter(item =>
            item.category.toLowerCase() === searchValue.toLowerCase()
        )
	:
	allDonationCard;
	
     const filteredCards = JSON.parse(data)?.filter((card) =>
     card.category.toLowerCase().includes(searchValue)
     );
console.log(filteredCards);
    
    return (
        <div>
            <Banner handleSearchValue= {handleSearchValue} ></Banner>

            {/* cards part starts from here */}

            <div className="max-w-[75%] lg:max-w-[1320px] mx-auto my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    filterDonation?.map ( card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;