import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Leanding from "../pages/Leanding";
import { Auth } from "../pages/Auth";
import About from "../components/about/About";
import Doctors from "../components/doctors/Doctors";
import Services from "../components/service/Services";
import CantactUs from "../components/cantact/Contactus";

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
        path: "services",
        Component: Services,
      },
      {
        path: "cantactus",
        Component: CantactUs,
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
