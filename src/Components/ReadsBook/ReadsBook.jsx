import { useNavigate } from "react-router-dom";

const ReadsBook = ({ read }) => {
  const navigate = useNavigate();
  const {
    id,
    img,
    name,
    writer_name,
    tags,
    category,
    rating,

    pages,
    publisher,
    year_of_publishing,
  } = read;

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  const handleDetails = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div>
      <article className="flex flex-col md:flex-row gap-10 bg-white transition mt-7">
        <div className="flex md:w-1/3 ">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
              <span>{currentYear}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>{currentDate}</span>
            </time>
          </div>

          <figure className="flex justify-center items-center bg-[#F3F3F3] px-14 md:px-20 py-10 md:py-0 ">
            <img src={img} alt={name} width={100} />
          </figure>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <h3 className="text-xl font-bold uppercase text-gray-900">{name}</h3>
          <p className="text-base mt-4">By: {writer_name}</p>
          <div className="border-t w-full my-2"></div>
          <p className="">Book Id: {id}</p>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex items-center gap-2 my-2">
              <p>Tags:</p>
              <span className="btn btn-sm bg-[#3dff1f3f] text-[#227a2e]">
                #{tags[0]}
              </span>
              <span className="btn btn-sm bg-[#3dff1f3f] text-[#1f722a]">
                #{tags[1]}
              </span>
            </div>
            <p className="">
              Year of Publishing:{" "}
              <span className="font-bold">{year_of_publishing}</span>
            </p>
          </div>
          <div className="border-t w-full my-3"></div>

          <div className="flex items-center gap-2">
            <p>
              Publisher: <span className="font-bold"> {publisher}</span>
            </p>
            <p>Page: {pages}</p>
          </div>

          <div className="flex gap-x-1 py-5">
            <button className="btn btn-sm border bg-[#0430f52a] text-blue-400 text-sm rounded-full">
              Category: {category}
            </button>
            <button className="btn btn-sm border bg-[#fffc6260] text-orange-400 text-sm rounded-full">
              Rating: {rating}
            </button>
            <button
              onClick={handleDetails}
              className="btn btn-sm bg-[#22BE0A] text-white rounded-full"
            >
              Details
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ReadsBook;
