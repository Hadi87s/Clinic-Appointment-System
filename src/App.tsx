import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./screens/login";
import Landing from "./screens/landing";
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
import GlobalThemeProvider from "./providers/themeProvider";
import { Role } from "./types/@types";
import UserProfile from "./components/profile-pages/UserProfile";
import AdminProfile from "./components/profile-pages/AdminProfile";
import OurDoctors from "./screens/OurDoctors";

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
          <Protected role={Role.doctor}>
            <ManageAppointments />
          </Protected>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Protected role={Role.doctor}>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/view-appointment",
        element: (
          <Protected role={Role.patient}>
            <NotLogged>
              <ViewAppointment />
            </NotLogged>
          </Protected>
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
        path: "/user/:id",
        element: <UserProfile />,
      },
      {
        path: "/admin/:id",
        element: <AdminProfile />,
      },
      {
        path: "/doctors",
        element: <OurDoctors />,
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
      <GlobalThemeProvider>
        <AppointmentsProvider>
          <AuthProvider>
            <RouterProvider router={routes} />
          </AuthProvider>
        </AppointmentsProvider>
      </GlobalThemeProvider>
    </div>
  );
};

export default App;
