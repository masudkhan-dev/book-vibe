import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>book vibe | home</title>
      </Helmet>
      <Banner />
      <Books />
    </div>
  );
};

export default Home;
