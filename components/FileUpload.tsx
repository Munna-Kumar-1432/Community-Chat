"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: "messageFile" | "serverImage";
  value: string | undefined;
}
export const FileUpload = ({ onChange, endpoint, value }: FileUploadProps) => {
    
    console.log(value)
    const fileType = value?.split(".").pop()
    if(value && fileType !== "pdf"){
       return (
         <div className="relative h-20 w-20">
            <Image
            fill
            src={value}
            alt="upload"
            className="rounded-full"
            />
           <button className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm" type="button" onClick={()=>onChange("")}>
             <X className="h-4 w-4"/>
           </button>
        </div>
       )
    }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
