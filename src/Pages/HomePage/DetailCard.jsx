import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import { useEffect, useState } from "react";

const DetailCard = () => {
  const [detailCard, setDetailCard] = useState();
  const mainDetailCard = useLoaderData();
  const { name, image, description } = detailCard || {};
  const { id } = useParams();
  useEffect(() => {
    const findCard = mainDetailCard?.find(
      (mainDetailCard) => mainDetailCard.id === id
    );

    setDetailCard(findCard);
  }, [id, mainDetailCard]);
  return (
    <div>
      <div className="mb-10 mt-10">
        <NavBar></NavBar>
      </div>
      <div className="text-white text-3xl">
        Details
        <p className="text-white text-3xl">{id}</p>
        <img className="w-[300px] h-[200px]" src={image} alt="" />
        <p className="text-white">{name}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default DetailCard;
