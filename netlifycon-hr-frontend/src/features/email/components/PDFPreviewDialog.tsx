import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axiosInstance from "@/lib/axios-instance";
import { useEffect, useState } from "react";
import { toast } from "sonner";

async function fetchHtml(id: string): Promise<{ data: string } | undefined> {
  try {
    const response = await axiosInstance.get<{ data: string }>(
      "/payslip/html/" + id
    );
    return response.data;
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : "Something went wrong!";
    toast.error(errMsg);
  }
}
export function PDFPreviewDialog({
  offerLetterId,
}: {
  offerLetterId?: string;
}) {
  const [htmlPreview, setHtmlPreview] = useState("");

  useEffect(() => {
    if (!offerLetterId) return;
    const fetchData = async () => {
      const result = await fetchHtml(offerLetterId);
      if (result?.data) {
        setHtmlPreview(result.data as string);
      }
    };
    fetchData();
  }, [offerLetterId]);

  return (
    <DialogContent className="sm:max-w-4xl w-full max-h-[90vh]">
      <DialogHeader>
        <DialogTitle>PDF Preview</DialogTitle>
        <DialogDescription>
          Scroll through the PDF preview below.
        </DialogDescription>
      </DialogHeader>

      <div className="overflow-auto h-[60vh] border rounded-md py-3 bg-white">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        />
      </div>

      <DialogFooter className="pt-4">
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
