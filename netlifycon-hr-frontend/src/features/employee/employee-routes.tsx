import DashBoard from "../dashbaord/pages/DashBoard";
import { EmailList } from "../email/components/EmailList";
import { SalaryList } from "../email/components/SalaryList";

export const ManageOfferLetterRoutes = [
  {
    index: true,
    element: <DashBoard />,
  },
  {
    path: "offerLetter",
    element: <EmailList />,
  },
  {
    path: "payslip",
    element: <SalaryList />,
  },
];
