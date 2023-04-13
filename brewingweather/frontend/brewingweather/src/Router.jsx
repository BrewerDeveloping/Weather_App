import App from "./App";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/LogIn";
import LandingPage from "./components/LandingPage";

const Router = createBrowserRouter([
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
    ],
  },
]);

export default Router;
