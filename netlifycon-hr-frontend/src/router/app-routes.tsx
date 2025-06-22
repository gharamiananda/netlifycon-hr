import AcknowledgeSuccessPage from "@/components/AcknowledgeSuccessPage";
import Landing from "@/features/auth/page/HomePgae";
import LoginPage from "@/features/auth/page/Login";
import { ManageOfferLetterRoutes } from "@/features/employee/employee-routes";
import DashboardLayout from "@/layout/DashboardLayout";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/acknowledge/:email",
    element: <AcknowledgeSuccessPage />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: ManageOfferLetterRoutes,
  },
]);

export default routes;
