import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./screens/login";
import Landing from "./components/Landing/landing";
import Dashboard from "./screens/dashboard";
import ViewAppointment from "./screens/viewAppointment";
import Navbar from "./components/navbar/navbar";
import Appointment from "./screens/createAppointment";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/view-appointment",
        element: <ViewAppointment />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
];
const browserRouter = createBrowserRouter(routes);

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the matched route's component */}
    </>
  );
}

const App = () => {
  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default App;
