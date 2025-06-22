import axiosInstance from "@/lib/axios-instance";
import type { TResponse } from "@/types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { IOfferLetter } from "../service/store";
import { toast } from "sonner";

async function fetchSentEmails() {
  try {
    const response = await axiosInstance.get<TResponse<IOfferLetter[]>>(
      "/offer-letter?status=draft"
    );
    return response;
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : "Something went wrong!";
    toast.error(errMsg);
  }
}
const DraftEmailList = () => {
  const [sentEmails, setsentEmails] = useState<IOfferLetter[]>();
  useEffect(() => {
    fetchSentEmails().then((res) => {
      console.log(res?.data?.data, "res");
      setsentEmails(res?.data?.data);
    });
  }, []);
  return sentEmails?.map((mail) => (
    <NavLink
      to={`/dashboard/sent-email/${mail._id}`}
      key={mail._id}
      className={({ isActive }) =>
        `flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0 
        ${
          isActive
            ? "bg-muted text-foreground"
            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        }`
      }
    >
      <div className="flex w-full items-center gap-2">
        <span>{mail?.employeeName}</span>
        <span className="ml-auto text-xs">{mail?.createdAt}</span>
      </div>
      <span className="font-medium">{mail?.emailSubject}</span>
      <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
        {mail?.emailSubject}
      </span>
    </NavLink>
  ));
};

export default DraftEmailList;
