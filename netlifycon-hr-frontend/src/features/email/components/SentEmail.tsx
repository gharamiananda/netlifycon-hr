import { useEffect } from "react";
import SentEmailView from "./SentEmailView";
import { useSidebar } from "@/components/ui/sidebar";

const SentEmail = () => {
  const { setOpen } = useSidebar();

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <SentEmailView
        fromName="Ananda Gharami"
        fromEmail="ananda@example.com"
        toEmail="client@company.com"
        subject="Project Update and Timeline"
        body={`Hello Team,

This is a quick update on the progress of the project. We've completed Phase 1 and are starting Phase 2 next week.

Best regards,
Ananda`}
        timestamp="June 8, 2025 at 11:20 AM"
      />
    </div>
  );
};

export default SentEmail;
