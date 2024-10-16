import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import BookDetails from "../Components/BookDetails/BookDetails";
import axios from "axios";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import Contact from "../Components/Contact/Contact";
import PageToRead from "../Components/PageToRead/PageToRead";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: async ({ params }) => {
          const res = await axios.get("/books.json");
          const data = res.data;
          const books = data.find((book) => book.id === parseInt(params.id));
          return books;
        },
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        loader: async () => {
          const res = await axios.get("/books.json");
          return res.data;
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pagetoread",
        element: <PageToRead />,
      },
    ],
  },
]);

export default Router;
