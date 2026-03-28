import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Leanding from "../pages/Leanding";
import { Auth } from "../pages/Auth";
import About from "../components/about/About";

const AppRoutes = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Leanding,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  // Auth has no Navbar/Footer — kept outside the layout
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