
import Map from "../Carddetails/Map/Map";
import Singlecard from "../Singlecard/Singlecard";

import Sort from "../Singlecard/Sort";


const Multicard = () => {
  return (
    <>
      <section className="backdrop-blur-xl px-4 sm:px-6 lg:px-10 bg-[#ffffff0e] backdrop-sepia-0 w-full mx-auto mt-20 shadow-2xl py-6 md:py-10 rounded-lg mb-3">
        {/* map */}
        <Map />
        
        <div>
              {/* heading */}
          <h2 className="text-4xl text-white font-bold p-4 text-center">
            Choose Your Destination
          </h2>
            {/* sorting starts*/}
          <div className="flex relative mt-3 justify-center mb-2">

            <Sort />
          </div>
             {/* sorting end*/}

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
            <Singlecard />
            <Singlecard />
            <Singlecard />
            <Singlecard />
            <Singlecard />
            <Singlecard />
            <Singlecard />
            <Singlecard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Multicard;
