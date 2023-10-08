/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { id, name, description, price, image } = service;
  return (
    <div className="" data-aos="zoom-out">
      <figure className="relative h-[400px] w-[900px] mx-auto mb-10">
        <img className="h-full w-full object-cover object-center" src={image} />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between  border bg-white/20 border-none bg-opacity-70 py-4 px-6 shadow-lg shadow-black/5 saturate-300 backdrop-blur-md">
          <div>
            <p className="text-white text-xl font-bold">{name}</p>
            <p className="mt-2 text-gray-100 font-normal">
              {description}
              <p className="bg-white w-fit rounded-sm p-1 text-black text-sm">
                {price}
              </p>
            </p>
          </div>
          <p className="flex items-center text-2xl">
            <Link to={`/Details/${id}`}>
              {" "}
              <button className="btn border-none rounded-none bg-[#00FFE1] text-gray-900 font-DM">
                DETAILS
              </button>
            </Link>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ServiceCard;
