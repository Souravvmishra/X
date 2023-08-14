import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, Footer, ComingSoon } from "./components";
import {
  HomePage,
  AboutPage,
  ContactPage,
  RegisterPage,
  DashboardPage,
} from "./pages";

const routesData = [
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/",
  //   element: <ComingSoon />,
  // },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routesData.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
