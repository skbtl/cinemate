import PageNotFoundImg from "../assets/PageNotfound.png";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle.js";

export const PageNotFound = () => {
  useTitle("Page not found! Try again!");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-2xl ">
            <img
              className="max-h-96 rounded-lg "
              src={PageNotFoundImg}
              alt="Page not found try again at later times."
            />
          </div>
        </div>

        <div className="flex justify-center my-4 ">
          <Link to="/">
            <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-100 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">
              Back to Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
