import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";

const SERVICE_ID = "service_vqj5uhg";
const TEMPLATE_ID = "template_kh6ce33";
const PUBLIC_KEY = "awkbpS1QEbCf8ftoi";

export default function EmailForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);

    try {
      if (!formRef.current) return;
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      formRef.current.reset();
      setIsSuccess(true);
    } catch (err) {
      console.error("Failed to send email:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto mt-10 p-6 shadow-lg">
      <CardContent>
        <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
          <div>
            <Label htmlFor="from_name">Name</Label>
            <Input id="from_name" name="from_name" required />
          </div>

          <div>
            <Label htmlFor="from_email">Email</Label>
            <Input id="from_email" type="email" name="from_email" required />
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" required />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={4} required />
          </div>

          <div>
            <Label htmlFor="attachment">Attachment</Label>
            <Input id="attachment" type="file" name="attachment" />
          </div>

          <Button
            type="submit"
            disabled={isSending}
            className="w-full flex items-center justify-center"
          >
            {isSending ? (
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
            ) : null}
            {isSending ? "Sending..." : "Send Email"}
          </Button>

          {isSuccess && (
            <div className="flex items-center gap-2 text-green-600 text-sm mt-2">
              <CheckCircle className="w-4 h-4" />
              Message sent successfully!
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
