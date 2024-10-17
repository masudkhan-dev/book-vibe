import { TypeAnimation } from "react-type-animation";

import book from "../../../public/assets/banner.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/listedbooks");
  };

  return (
    <div className="container mx-auto px-3 lg:px-0">
      <div className="flex justify-center items-center mt-3 md:mt-7">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#F3F3F3] py-5 md:py-10 md:px-48 w-full rounded-lg ">
          <div className="text-center lg:text-left my-5 lg:mb-0">
            <TypeAnimation
              sequence={[
                "Books to freshen up  your bookshelf",
                1000,
                "Books makes you happy",
                1000,
                "Books are your best friend",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                fontWeight: "bold",
              }}
              repeat={Infinity}
            />{" "}
            <br />
            <button
              onClick={handleNavigate}
              className="mt-8 btn bg-[#22BE0A] text-white px-6 py-2  rounded-md"
            >
              View The List
            </button>
          </div>
          <div className="">
            <img
              src={book}
              alt="books"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
