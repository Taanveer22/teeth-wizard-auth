import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../components/NotFound";
import Treatments from "../components/Treatments";
import Appointments from "../components/Appointments";
import Profile from "../components/Profile";
import Home from "../components/Home";
import CardDetail from "../components/CardDetail";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "./PrivateRoutes";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const serviceResponse = await fetch("/service.json");
          const serviceData = await serviceResponse.json();

          const feedbackResponse = await fetch("/happyclients.json");
          const feedbackData = await feedbackResponse.json();

          return { serviceData, feedbackData };
        },
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>,
        loader: async () => {
          const serviceResponse = await fetch("/service.json");
          const serviceData = await serviceResponse.json();
          return serviceData;
        },
      },
      {
        path: "/appointments",
        element: (
          <PrivateRoutes>
            <Appointments></Appointments>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/cardDetail/:id",
        element: (
          <PrivateRoutes>
            <CardDetail></CardDetail>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const allData = await res.json();
          const oneData = allData.find((item) => item.id == params.id);
          return oneData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default PublicRoutes;
