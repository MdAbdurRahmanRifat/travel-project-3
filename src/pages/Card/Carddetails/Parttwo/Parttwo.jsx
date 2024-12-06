
const Parttwo = () => {
  return (
    <>
       <div className="max-w-7xl mx-auto mt-3 p-4 flex flex-col items-center lg:flex-row justify-between gap-6">
      {/* About This Place */}
      <div className="flex-1">
        <h2 className="text-2xl text-gray-300 font-bold mb-4">About this place</h2>
        <p className="mb-4 text-gray-300">
          1 Private bedroom with workstation and 1 Private washroom.
        </p>
        <p className="mb-4 text-gray-300">
          One side of this area has an airport. Another side is the metro rail.
          But at the same time, it is a bit quiet after 5 pm :)
        </p>
        <p className="text-gray-300">
          You and the host can use the study area, TV area, dining area, and
          kitchen. Please dont ...
        </p>
        <button className="mt-4 text-gray-300 underline">Show more</button>
      </div>

      {/* Booking Section */}
      <div className="w-full lg:w-1/3 bg-transparent border shadow-md p-4 rounded-lg">
        <div className="text-xl text-gray-300 font-bold mb-4">$23 <span className="text-sm font-normal">night</span></div>
        <div className="border rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 font-medium mb-1">Check-in</label>
              <input
                type="date"
                className="w-full border rounded-lg p-2"
                defaultValue="2024-12-07"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">Check-out</label>
              <input
                type="date"
                className="w-full border rounded-lg p-2"
                defaultValue="2024-12-12"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Guests</label>
            <select
              className="w-full border bg-transparent font-bold text-black rounded-lg p-2"
              defaultValue="1 guest"
            >
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
          Reserve
        </button>
        <p className="text-sm text-gray-300 mt-2 text-center">
          You wont be charged yet
        </p>

        <div className="mt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-300">$23 x 5 nights</span>
            <span className="text-gray-300">$116</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Airbnb service fee</span>
            <span className="text-gray-300">$16</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span className="text-gray-300">Total before taxes</span>
            <span className="text-gray-300">$132</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Parttwo
