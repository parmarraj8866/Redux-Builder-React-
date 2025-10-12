// import About from "../UI/About";
// import CounterUI from "../UI/CounterUI";
// import Home from "../UI/Home";

import { lazy } from "react";

const Home = lazy(() => import("../Pages/FoodCards"));
const About = lazy(() => import("../UI/About"));
const CreateForm = lazy(() => import("../UI/CreateForm"));
const Navbar = lazy(() => import("../Pages/Navbar"));
const ViewFood = lazy(() => import("../Pages/ViewFood"));
const FoodCards = lazy(() => import("../Pages/FoodCards"));
const TableFood = lazy(() => import("../Pages/TableFood"));

const routing = [
  {
    element: <TableFood />,

    path: "/",
  },

  {
    element: <About />,
    path: "/about",
  },
  {
    element: <CreateForm />,
    path: "/createForm",
  },
  {
    element: <CreateForm />,
    path: "/ordernow",
  },
  {
    element: <CreateForm />,
    path: "/updatefood/:id",
  },
  {
    element: <ViewFood />,
    path: "/viewfood/:id",
  },
  {
    element: <FoodCards />,
    path: "/allFoods",
  },
];

export default routing;
