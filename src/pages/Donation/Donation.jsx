import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    const donated = JSON.parse(localStorage.getItem("donated"));

    if (donated) {
      setDonation(donated);
    } else {
      setNoFound("No donation found");
    }
  }, []);

  const deleteAll = () => {
    localStorage.removeItem("donated");
    setDonation([]);
    setNoFound("No donation found");
  };
  return (
    <div>
      {donation?.length > 0 && (
        <button
          onClick={deleteAll}
          className="block mx-auto bg-[#009444] rounded-md p-3 text-white font-medium"
        >
          {" "}
          Delete All{" "}
        </button>
      )}
      <div>
        {noFound ? (
          <div>
            <p className="h-[70vh] flex justify-center items-center text-7xl font-bold">
              {" "}
              {noFound}{" "}
            </p>
          </div>
        ) : (
          <div className="mt-20 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 mb-20">
            {isShowMore
              ? donation?.map((data) => (
                  <DonationCard key={data.id} data={data}></DonationCard>
                ))
              : donation
                  ?.slice(0, 4)
                  ?.map((data) => (
                    <DonationCard key={data.id} data={data}></DonationCard>
                  ))}
          </div>
        )}
      </div>
      {donation?.length > 4 && (
        <button
          onClick={() => setIsShowMore(!isShowMore)}
          className="block mx-auto bg-[#009444] rounded-md p-3 text-white font-medium"
        >
          {" "}
          {isShowMore ? " See Less" : " See More"}
        </button>
      )}
    </div>
  );
};

export default Donation;
