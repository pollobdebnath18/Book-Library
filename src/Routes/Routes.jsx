import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import About from "./../components/About/About";
import BookDetails from "./../pages/BookDetails/BookDetails";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "./../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("BookData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: async () => {
          const res = await fetch("/BookData.json"); // Make sure BookData.json is in /public folder
          const data = await res.json(); // parse JSON
          return data; // now it's an array
        },
        Component: BookDetails,
      },
    ],
  },
]);
