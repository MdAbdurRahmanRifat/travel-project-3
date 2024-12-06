import Singlecard from "./Singlecard/Singlecard";
import Sort from "./Singlecard/Sort";

const Card = () => {
  return (
    <section className="backdrop-blur-xl px-4 sm:px-6 lg:px-10 bg-[#ffffff0e] backdrop-sepia-0 w-full mx-auto mt-20 shadow-2xl py-6 md:py-10 rounded-lg mb-3">
      <div className="flex justify-center mb-6">
        <Sort />
      </div>
      <div className="flex  flex-wrap md:flex-wrap sm:flex-wrap lg:flex-nowrap  flex-col lg:flex-row items-start gap-10">
        {/* Grid for Cards */}
        <div className="flex flex-wrap gap-5 flex-col sm:flex-row">
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
          <Singlecard />
         <div>
         <button className="text-white px-6 py-3 rounded-lg bg-orange-500 text-lg hover:bg-orange-700 transition">show more</button>
         </div>
        </div>

        {/* Map Section */}
        <div className="w-full flex lg:max-w-[500px] flex-shrink-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59420.95196853201!2d91.95166094192302!3d21.436731606067866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1733333040655!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Card;
