import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../components/NotFound";
import Treatments from "../components/Treatments";
import Appointments from "../components/Appointments";
import Profile from "../components/Profile";
import Home from "../components/Home";

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
        element: <Appointments></Appointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default PublicRoutes;
