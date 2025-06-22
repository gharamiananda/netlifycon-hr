"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type SentEmailProps = {
  fromName: string;
  fromEmail: string;
  toEmail: string;
  subject: string;
  body: string;
  timestamp: string;
  avatarUrl?: string;
};

export default function SentEmailView({
  fromName,
  fromEmail,
  toEmail,
  subject,
  body,
  timestamp,
  avatarUrl,
}: SentEmailProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 flex justify-center">
      <Card className="w-full max-w-3xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm rounded-lg p-6">
        {/* Subject */}
        <h1 className="text-xl font-semibold">{subject}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {timestamp}
        </p>

        <Separator className="my-4" />

        {/* From/To Section */}
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{fromName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium">
              {fromName} &lt;{fromEmail}&gt;
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              to {toEmail}
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Email Body */}
        <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
          {body}
        </div>
      </Card>
    </div>
  );
}
