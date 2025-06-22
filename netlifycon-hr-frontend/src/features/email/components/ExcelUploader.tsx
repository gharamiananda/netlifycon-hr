import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios-instance";
import React, { useState } from "react";
import { toast } from "sonner";

const ExcelUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("multipleOfferLetterCsv", file);

    try {
      const res = await axiosInstance.post(
        "/offer-letter/upload-offer-letter-csv",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(`Upload successful: ${res.data.count} employees added.`);
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload Employee Excel</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ExcelUploader;
