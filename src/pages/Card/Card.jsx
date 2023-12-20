import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {  ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {

  const { id } = useParams();

  const cards = useLoaderData();

  const [card, setCard] = useState({});

  useEffect(() => {
    const findCard = JSON.parse(cards)?.find(
      (card) => card.id === parseInt(id)
    );
    setCard(findCard);
  }, [cards, id]);

  const handleClickDonate = () => {


        const donatedArray = [];
        const donated = JSON.parse(localStorage.getItem("donated"));
        if(!donated){
            donatedArray.push(card);
            localStorage.setItem("donated", JSON.stringify(donatedArray));
            toast.success(`You have donated $${card.price}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else {

            const isExist = donated.find( item => item.id === JSON.parse(id));
            if(!isExist){
                donatedArray.push(...donated, card);
                localStorage.setItem("donated", JSON.stringify(donatedArray));
                toast.success(`You have donated $${card.price}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }else {
                toast.error(`You have already donated $${card.price}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

        } 
  }



 return (
    <>
      <div className="flex flex-col max-w-[1320px] mx-auto justify-center items-center z-0 gap-4 p-4 mt-20 mb-20">
        <div className="relative w-full lg:w-[1120px] mx-auto">
          {/* Image */}
          <img
            src={card.picture}
            className="w-[100%] object-contain rounded-lg"
            alt={card.title}
          />

          {/* Donate button */}
          <div className="bg-[#0b0b0b80] h-28 md:h-32 lg:h-36 w-[100%] absolute bottom-0 p-10 bg-opacity-25">
            <button
            onClick={handleClickDonate}
              className="p-1 md:p-3 rounded text-xl font-semibold text-white"
              style={{ backgroundColor: card.tertiary_color }}
            >
              Donate ${card.price}
            </button>
          </div>
          <ToastContainer />
        </div>

        <div className="w-full lg:w-[1000px] xl:w-[1130px]">
          {/* Title */}
          <h1 className="text-4xl text-center md:text-start md:text-5xl font-bold">
            {card.title}
          </h1>

          {/* Description */}
          <p className="py-6 text-justify text-lg font-normal text-[#0b0b0bb3]">
            {card.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
