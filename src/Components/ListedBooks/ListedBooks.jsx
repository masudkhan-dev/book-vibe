import { useEffect, useState } from "react";
import { getRead } from "../../Utility/ReadLocalStorage";
import { useLoaderData } from "react-router-dom";
import ReadsBook from "../ReadsBook/ReadsBook";
import { getWhitelist } from "../../Utility/WhitelistLocalStorage";
import Whitelist from "../Whitelist/Whitelist";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const [reads, setReads] = useState([]);
  const [whitelists, setWhitelists] = useState([]);

  const books = useLoaderData();

  useEffect(() => {
    const readBooks = getRead(); // get from localStorage
    const whitelistBooks = getWhitelist();

    const newReadBook = readBooks.map((i) => parseInt(i));
    const newWhitelistBook = whitelistBooks.map((i) => parseInt(i));

    if (newReadBook.length > 0 || newWhitelistBook.length > 0) {
      const read = books.filter((book) => newReadBook.includes(book.id));
      setReads(read);

      const whitelist = books.filter((book) =>
        newWhitelistBook.includes(book.id)
      );
      setWhitelists(whitelist);
    }
  }, [books]);

  const handleSortBy = (sort) => {
    const sorted = [...reads];

    if (sort === "rating") {
      sorted.sort((low, high) => high.rating - low.rating);
    } else if (sort === "pages") {
      sorted.sort((low, high) => high.pages - low.pages);
    } else if (sort === "year") {
      sorted.sort(
        (low, high) => high.year_of_publishing - low.year_of_publishing
      );
    }

    setReads(sorted);
  };

  return (
    <div>
      <Helmet>
        <title>listed books</title>
      </Helmet>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="flex justify-end mt-8">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-[#22BE0A] m-1">
              Sort By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 md:w-52 p-2 shadow-xl right-1"
            >
              <li onClick={() => handleSortBy("rating")}>
                <span>Rating</span>
              </li>
              <li onClick={() => handleSortBy("pages")}>
                <span>Number of pages</span>
              </li>
              <li onClick={() => handleSortBy("year")}>
                <span>Publisher Year</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Read Books"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div>
                {reads.map((read) => (
                  <ReadsBook key={read.id} read={read} />
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Whitelist Books"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div>
                {whitelists.map((whitelist) => (
                  <Whitelist key={whitelist.id} whitelist={whitelist} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
