import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout } from "../components";
import ROUTES from "../config/routes";
import Home from "../pages/home/home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <div>Something went wrong!</div>, // Add an error element
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
