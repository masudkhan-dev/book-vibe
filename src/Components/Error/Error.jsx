import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center space-y-10">
              <h1 className="text-7xl md:text-9xl font-black text-gray-200">
                Oops..
              </h1>
              <p className=" text-gray-500">
                404 we can not find your destination.
              </p>
              <Link to="/">
                <button className="mt-6 btn btn-error rounded">
                  Go Back Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
