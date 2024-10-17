import { useLoaderData, useParams } from "react-router-dom";
import { setRead } from "../../Utility/ReadLocalStorage";
import { setWhitelist } from "../../Utility/WhitelistLocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  const {
    img,
    name,
    writer_name,
    tags,
    category,
    rating,
    review,
    pages,
    publisher,
    year_of_publishing,
  } = books;

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  const handleAddRead = () => {
    setRead(id);
    toast("Book added to Read!");
  };

  const handleAddWhitelist = () => {
    setWhitelist(id);
    toast("Book added to Whitelist!");
  };

  return (
    <div>
      <Helmet>
        <title>book {id}</title>
      </Helmet>
      <div className="container mx-auto px-3 lg:px-0">
        <article className="flex flex-col md:flex-row gap-10 bg-white transition hover:shadow-xl mt-7">
          <div className="flex ">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                <span>{currentYear}</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>{currentDate}</span>
              </time>
            </div>

            <figure className="flex justify-center items-center bg-[#F3F3F3] px-14 md:px-20  py-10">
              <img src={img} alt={name} width={250} />
            </figure>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-gray-900">
                {name}
              </h3>
              <p className="text-xl my-4">By: {writer_name}</p>
              <div className="border-t w-full my-2"></div>
              <p className="text-xl">{category}</p>
              <div className="border-t w-full my-2"></div>

              <p className="mt-2 text-justify text-sm/relaxed text-gray-700">
                Review: {review}
              </p>
              <div className="flex items-center gap-2 my-5">
                <p>Tags:</p>
                <span className="btn btn-sm bg-[#3dff1f3f] text-[#227a2e]">
                  #{tags[0]}
                </span>
                <span className="btn btn-sm bg-[#3dff1f3f] text-[#1f722a]">
                  #{tags[1]}
                </span>
              </div>
              <div className="border-t w-full my-3"></div>
              <p className="my-2">
                Number of Pages: <span className="font-bold"> {pages}</span>
              </p>
              <p>
                Publisher: <span className="font-bold"> {publisher}</span>
              </p>
              <p className="my-2">
                Year of Publishing:{" "}
                <span className="font-bold">{year_of_publishing}</span>
              </p>
              <p>
                Rating: <span className="font-bold">{rating}</span>
              </p>
              <p className="my-3">Book Id: {id}</p>
              <div className="space-x-2 py-5">
                <button
                  onClick={handleAddRead}
                  className="btn border border-[#F3F3F3] px-8"
                >
                  Read
                </button>
                <button
                  onClick={handleAddWhitelist}
                  className="btn bg-[#4FB1C9] px-8"
                >
                  Wishlist
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BookDetails;
