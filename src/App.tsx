import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./screens/login";
import Landing from "./components/Landing/landing";
import Dashboard from "./screens/dashboard";
import ViewAppointment from "./screens/viewAppointment";
import NotFound from "./components/notFound/notFound";
import NavbarLayout from "./components/navbarLayout/navbarLayout";
import AuthProvider from "./providers/authProvider";
import Protected from "./components/Protected/protected";
import ManageAppointments from "./screens/manageAppointments";
import CreateAppointment from "./screens/createAppointment";
import "./App.css";
import NotLogged from "./components/Protected/notLogged";
import { AppointmentsProvider } from "./providers/appointmentsProvider";
import Signup from "./screens/signup";
import AboutUs from "./screens/about";
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
        path: "/manage-appointments",
        element: (
          <Protected>
            <ManageAppointments />
          </Protected>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/view-appointment",
        element: (
          <NotLogged>
            <ViewAppointment />
          </NotLogged>
        ),
      },
      {
        path: "/create-appointment",
        element: (
          <NotLogged>
            <CreateAppointment />
          </NotLogged>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <AboutUs />,
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
      <AppointmentsProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </AppointmentsProvider>
    </div>
  );
};

export default App;
