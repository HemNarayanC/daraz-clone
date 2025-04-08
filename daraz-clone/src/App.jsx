import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductDetails from './components/products/ProductDetails';
import PageNotFound from './pages/PageNotFound';
import DFooter from './components/DFooter';
import HFooter from './components/HFooter';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <DFooter />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/:id", element: <ProductDetails /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
