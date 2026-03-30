import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Leanding from "../pages/Leanding";
import { Auth } from "../pages/Auth";
import About from "../components/about/About";
import Doctors from "../components/doctors/Doctors";

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
      {
        path: "doctors",
        Component: Doctors,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
  // Auth has no Navbar/Footer — kept outside the layout
  {
    path: "login",
    Component: Auth,
  },
]);

export default AppRoutes;
