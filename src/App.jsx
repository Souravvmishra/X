import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        {routesData.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {location.pathname !== "/register" ||
        (location.pathname !== "/dashboard" && <Footer />)}
    </>
  );
};

export default App;
