import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const { id, img, name, writer_name, tags, category, rating } = book;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="bg-[#F3F3F3] py-5">
          <img src={img} alt={name} className="" />
        </figure>
        <div className="p-7">
          <div className="flex gap-x-5">
            <p className="bg-[#F4FBF3] text-[#22BE0A] btn btn-sm">#{tags[0]}</p>
            <p className="bg-[#F4FBF3] text-[#22BE0A] btn btn-sm">#{tags[1]}</p>
          </div>
          <h2 className="card-title my-3">{name}</h2>
          <p>By: {writer_name}</p>
          <div className="border-t-2 border-dashed w-full my-3"></div>
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <p className="flex items-center gap-2 text-base">
              {rating} <FaRegStar className="text-yellow-500 text-xl" />
            </p>
          </div>
        </div>
        <button onClick={handleNavigate} className="btn btn-warning mx-5">
          Show Details
        </button>
      </div>
    </div>
  );
};

export default Book;
