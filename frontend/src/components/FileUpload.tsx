import React from "react";
import { Upload } from "lucide-react";

interface FileUploadProps {
  onChange: (file: File) => void;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Property Photo
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="photo-upload"
              className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
            >
              <span>Upload a file</span>
              <input
                id="photo-upload"
                name="photo-upload"
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleChange}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileUpload;
