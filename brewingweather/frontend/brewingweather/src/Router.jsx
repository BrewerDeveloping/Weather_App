import App from "./App";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/LogIn";
import LandingPage from "./components/LandingPage";
import Weather from "./components/weather";
import Search from "./components/search/search";

const Router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signup/",
        element: <SignUp />,
      },
      {
        path: "/login/",
        element: <LogIn />,
      },
      {
        path: "/weather/",
        element: <Weather />,
      },
      // {
      //   path: "/about/",
      //   element: <About />,
      // },
      {
        path: "/search/",
        element: <Search />,
      },
    ],
  },
]);

export default Router;
