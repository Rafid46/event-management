/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { id, name, description, price, image } = service;
  return (
    <div className="mt-20" data-aos="zoom-out">
      <div className="relative h-[150px] lg:h-[400px] w-[400px] lg:w-[900px] mx-auto mb-52 lg:mb-0">
        <img className="h-full w-full object-cover object-center" src={image} />
        <div className="absolute bottom-15 lg:bottom-8  mx-auto lg:mx-[50px] flex items-center justify-center w-[400px] lg:w-[800px] border bg-white/20 border-none bg-opacity-70 py-4 px-6 shadow-lg shadow-black/5 saturate-300 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-around">
            <div>
              <p className="text-white text-xl font-bold">{name}</p>
              <p className="mt-2 text-gray-100 font-normal">
                {description}
                <p className="bg-white w-fit rounded-sm p-1 text-black text-sm">
                  {price}
                </p>
              </p>
            </div>
            <div className="items-center text-2xl">
              <Link to={`/Details/${id}`}>
                <button className="btn border-none rounded-none bg-[#00FFE1] text-gray-900 font-DM">
                  DETAILS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
