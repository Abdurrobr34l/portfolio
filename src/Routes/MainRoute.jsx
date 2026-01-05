import { createBrowserRouter } from "react-router";
import App from "../App";
import ProjectDetails from "../Components/ProjectDetails";
import Home from "../Components/Home/Home";
import ErrorPage404 from "../Components/ErrorPage404/ErrorPage404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This acts as your Layout (Header/Footer/Cursor)
    children: [
      {
        index: true,
        element: <Home />, // Main landing page content
      },
      {
        path: "details/:id",
        element: <ProjectDetails />,
      },
      {
        path: "*",
        element: <ErrorPage404 />,
      },
    ],
  },
]);