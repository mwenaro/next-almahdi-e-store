"use client";

import FileUpload from "@/components/file-upload";
import { UploadButton } from "@/libs/uploadthing";
import { useState } from "react";

type IImage = { url: string; key: string };

export default function UploadPage() {
  const [images, setImages] = useState<IImage[]>([]);
  function handleChange(data: IImage[]) {
    setImages(data);
    console.log({ dataOnChange: data });
  }

  function handleRemove(data: IImage[]) {
    console.log({ ondeleteData: data });
    console.log("removed");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      <FileUpload
        value={images}
        onRemove={handleChange}
        onChange={handleChange}
      />
    </main>
  );
}
