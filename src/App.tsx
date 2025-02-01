import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./screens/login";
import Landing from "./components/Landing/landing";
import Dashboard from "./screens/dashboard";
import ViewAppointment from "./screens/viewAppointment";
import Appointment from "./screens/createAppointment";
import NotFound from "./components/notFound/notFound";
import NavbarLayout from "./components/navbarLayout/navbarLayout";

const routes = createBrowserRouter([
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
