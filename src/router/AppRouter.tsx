import { createBrowserRouter } from "react-router";
import Leanding from "../pages/Leanding";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Leanding,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default AppRoutes;