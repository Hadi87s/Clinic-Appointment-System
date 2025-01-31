import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./screens/login";
import Landing from "./components/Landing/landing";
import Dashboard from "./screens/dashboard";
import ViewAppointment from "./screens/viewAppointment";
import Navbar from "./components/navbar/navbar";
import Appointment from "./screens/createAppointment";
import NotFound from "./components/notFound/notFound";

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
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
