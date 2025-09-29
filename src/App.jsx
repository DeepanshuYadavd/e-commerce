import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./common/Layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
