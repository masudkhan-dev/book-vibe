import { Helmet } from "react-helmet-async";

const PageToRead = () => {
  return (
    <div>
      <Helmet>
        <title>page to read</title>
      </Helmet>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
              Page to Read
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 grid place-content-center text-9xl font-black">
              Page to Read
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </div>
  );
};

export default PageToRead;
