import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./common/Layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

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
