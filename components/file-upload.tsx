"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

type Props = {
  onChange: (url?: string) => void;
  endPoint: keyof typeof ourFileRouter;
};

const FileUpload = ({ onChange, endPoint }: Props) => {
  return (
    <UploadDropzone
      onClientUploadComplete={res => {
        onChange(res?.[0].url);
      }}
      endpoint={endPoint}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
    />
  );
};

export default FileUpload;
