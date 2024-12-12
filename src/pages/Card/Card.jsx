import { Link } from "react-router-dom";

import Singlecard from "./Singlecard/Singlecard";
import Sort from "./Singlecard/Sort";

const Card = () => {
  return (
    <>
      <section className="backdrop-blur-xl px-4 sm:px-6 lg:px-10 bg-[#ffffff0e] backdrop-sepia-0 w-full mx-auto mt-20 shadow-2xl py-6 md:py-10 rounded-lg mb-3">
        <div className="">
          <h3 className="text-3xl md:text-6xl text-white font-bold pt-2 pb-6 text-center">
            Choose Your <span className="text-orange-500">Destination</span>
          </h3>
        </div>
        <div className="flex relative justify-center mb-6">
          <Sort />
        </div>

        {/* Grid for Cards */}
        <div className="flex flex-wrap justify-center gap-5 w-full lg:w-[80%] mx-auto flex-col sm:flex-row">
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/multicard">
            <button className="text-white px-6 py-3 rounded-lg bg-orange-500 text-lg hover:bg-orange-700 transition">
              show more
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Card;
