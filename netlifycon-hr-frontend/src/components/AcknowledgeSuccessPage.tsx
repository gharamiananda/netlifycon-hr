/* eslint-disable @typescript-eslint/no-explicit-any */
// SuccessPage.tsx

import axiosInstance from "@/lib/axios-instance";
import { CheckCircle, LucideClockFading, MailWarning } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AcknowledgeSuccessPage() {
  const { email } = useParams();
  const [acknowledge, setAccknowledge] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      async function getAckowledge() {
        try {
          const res: any = await axiosInstance.post(
            "/offer-letter/offer-acknowledge/" + email,
            {}
          );
          setAccknowledge(res?.data?.message);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getAckowledge();
    }
  }, [email]);
  console.log(acknowledge, loading, "acknowledge");
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
          <LucideClockFading className="text-green-500 w-16 h-16 mx-auto mb-4" />

          <p className="text-red-700 mb-6">Please Wait........</p>
        </div>
      </div>
    );
  }
  if (!acknowledge) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
          <MailWarning className="text-green-500 w-16 h-16 mx-auto mb-4" />

          <p className="text-red-700 mb-6">
            Something went wrong.Please contact to Admin
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Acknowledged!
        </h1>
        <p className="text-gray-700 mb-6">{acknowledge}</p>
      </div>
    </div>
  );
}
