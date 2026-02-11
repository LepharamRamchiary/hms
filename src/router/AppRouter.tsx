import { createBrowserRouter } from "react-router";
import Leanding from "../pages/Leanding";
import { Auth } from "../pages/Auth";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Leanding,
  },
  {
    path: "login",
    Component: Auth,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default AppRoutes;