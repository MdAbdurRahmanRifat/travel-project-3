import { Link } from "react-router-dom";
import cardimage from "../../../../src/assets/forest.jpg";

const Singlecard = () => {
  return (
    <div className="rounded-lg border w-full max-w-[300px] mx-auto sm:mx-0 backdrop-blur-3xl bg-[#ffffff0e] backdrop-sepia-0 p-6 shadow-sm">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full object-cover dark:hidden"
            src=""
            alt=""
          />
          <img
            className="mx-auto hidden h-full object-cover hover:scale-[1.1] ease-linear duration-200 dark:block"
            src={cardimage}
            alt=""
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 text-gray-300">
            Up to 35% off
          </span>
          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Quick look</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          Coxs Bazar
        </a>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            $1,699
          </p>
          <Link to="/details">
          <button
            type="button"
            className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-medium text-white bg-orange-600 hover:bg-orange-800"
          >
            Show Details
          </button>
          </Link>
    
        </div>
      </div>
    </div>
  );
};

export default Singlecard;
