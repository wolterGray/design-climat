import React, {useState} from "react";

function ImageUploadForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => URL.createObjectURL(file));

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    setPreviewUrls((prevUrls) => [...prevUrls, ...filePreviews]);
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...selectedFiles];
    const newUrls = [...previewUrls];

    newFiles.splice(index, 1);
    newUrls.splice(index, 1);

    setSelectedFiles(newFiles);
    setPreviewUrls(newUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    // Здесь будет ваш код для отправки данных на сервер
    console.log("Форму можно отправить на сервер с использованием formData");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="  p-2 flex  items-center justify-center border border-gray-200  bg-white text-blue rounded-lg shadow-lg  ">
            <span className="text-base leading-normal">Выберите файл</span>
            <input
              multiple
              onChange={handleFileChange}
              type="file"
              className="hidden"
            />
          </label>
          {selectedFiles.length > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
          Upload Images
        </button>
      </form>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {previewUrls.map((url, index) => (
          <div key={index} className="relative group">
            <img
              src={url}
              alt={`Preview ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg shadow-md"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploadForm;
