import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./app_layout";
import ROUTES from "../config/routes";
import {
  Home,
  AboutUs,
  LocateUs,
  Programmes,
  Admission,
  JoinUs,
} from "../pages";
import { Toaster } from "react-hot-toast";
import Careers from "../pages/careers";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <div>Something went wrong!</div>, // Add an error element
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT_US.ROOT,
        element: <AboutUs />,
      },
      {
        path: ROUTES.PROGRAMMES.ROOT,
        element: <Programmes />,
      },
      {
        path: ROUTES.ADMISSION,
        element: <Admission />,
      },
      {
        path: ROUTES.LOCATE_US,
        element: <LocateUs />,
      },
      {
        path: ROUTES.CAREERS,
        element: <Careers />,
      },
      {
        path: ROUTES.JOIN_US,
        element: <JoinUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
