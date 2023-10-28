import "../../MainLayout/Typing.css";
const Banner = () => {
  return (
    <div className="wrapper">
      <div className="flex flex-col items-center justify-center static-txt">
        <h1 className="text-7xl font-bold text-white type">
          From Pixels to Glory.
        </h1>
        <h1 className="text-7xl font-bold text-white">
          <span className="bg-gradient-to-r from-[#de09c2] to-[#00FFE1] text-transparent bg-clip-text mr-2">
            Gamers
          </span>
          Unite,<span className="typing">Winners Ignite</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
