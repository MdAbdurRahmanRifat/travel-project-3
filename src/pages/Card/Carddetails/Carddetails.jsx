import detailphoto from "../../../assets/detail.jpeg";
import Map from "./Map/Map";
import Parttwo from "./Parttwo/Parttwo";
const Carddetails = () => {
  return (
    <>
      <section className="backdrop-blur-xl bg-[#ffffff0e] backdrop-sepia-0 w-[100%]  mx-auto mt-20  shadow-2xl p-10 rounded-lg mb-3 ">
        <div className="w-[70%] mx-auto flex flex-col items-start gap-5">
          <div>
            <h2 className="text-4xl text-white font-bold">
              Let us take you places youve only dreamed of
            </h2>
          </div>
          <div className="w-full h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={detailphoto}
              alt=""
            />
          </div>
        </div>
        <div>
          <Parttwo />
        </div>
        <div className='w-[90%] lg:w-[70%] mx-auto'>
           <Map />
        </div>
      </section>
    </>
  );
};

export default Carddetails;
