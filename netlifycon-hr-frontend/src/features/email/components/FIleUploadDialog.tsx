import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import axiosInstance from "@/lib/axios-instance";
const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
export default function FileUploadDialog() {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = useCallback((file: File) => {
    if (file.size > MAX_FILE_SIZE_BYTES) {
      toast.error(`File size should not exceed ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }
    if (file) {
      setSelectedFile(file);
    } else {
      toast.error("Please upload a valid CSV file.");
    }
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("No file selected");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("multipleOfferLetterCsv", selectedFile);

      await axiosInstance.post(
        "/offer-letter/upload-offer-letter-csv",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("File uploaded successfully!");
      setSelectedFile(null);
    } catch (error: unknown) {
      const err = error as AxiosError;

      toast.error(err.message || "File upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Upload CSV file</DialogTitle>
        <DialogDescription>Generate and send offer letter</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <div
          className={`flex items-center justify-center w-full`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-all
              ${
                dragOver
                  ? "bg-blue-100 border-blue-400"
                  : "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="mb-2" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Only CSV files are accepted
              </p>
              {selectedFile && (
                <p className="mt-2 text-sm text-green-500">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" disabled={isUploading}>
            Cancel
          </Button>
        </DialogClose>
        <Button onClick={handleUpload} disabled={!selectedFile || isUploading}>
          {isUploading ? "Uploading..." : "Submit"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
