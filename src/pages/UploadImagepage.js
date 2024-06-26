import React, { useState } from "react";
import axios from "axios";
import "../styles/Uploadimagepage.css";

import EditImageTopToolBar from "../components/EditImageTopToolBar";
import EditImageSideToolBar from "../components/EditImageSideToolBar";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const UploadImagepage = () => {
  const [clicked, setClicked] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [vectorizedImage, setVectorizedImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileFormat, setFileFormat] = useState("svg");
  const [isGrayscale, setIsGrayscale] = useState(false);

  const handleImageUpload = (imageData, file) => {
    setUploadedImageUrl(imageData);
    setUploadedFile(file);
    setVectorizedImage(null); // Clear the vectorized image when a new image is uploaded
    setConvertedImage(null); // Clear the converted image when a new image is uploaded
  };

  const handleVectorize = async () => {
    if (!uploadedFile) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);

      const params = new URLSearchParams();
      if (isGrayscale) {
        params.append("grayscale", "true");
      }

      const retryRequest = async (retries) => {
        try {
          const res = await axios.post(`http://127.0.0.1:8001/upload/?${params.toString()}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
          });

          const svgBlob = new Blob([res.data], { type: "image/svg+xml" });
          const svgUrl = URL.createObjectURL(svgBlob);
          setVectorizedImage(svgUrl);

          if (fileFormat !== "svg") {
            convertImageFormat(svgBlob, fileFormat);
          } else {
            setConvertedImage(svgUrl); // If SVG is selected, use the SVG URL directly
          }
        } catch (error) {
          if (retries > 0) {
            console.log(`Retrying... (${retries} attempts left)`);
            await new Promise((res) => setTimeout(res, 1000)); // Wait 1 second before retrying
            await retryRequest(retries - 1);
          } else {
            console.error("Error vectorizing image:", error);
          }
        }
      };

      await retryRequest(3); // Retry up to 3 times
    } catch (error) {
      console.error("Error vectorizing image:", error);
    }
    setLoading(false);
  };

  const convertImageFormat = async (svgBlob, format) => {
    const img = new Image();
    const svgUrl = URL.createObjectURL(svgBlob);

    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const dataUrl = canvas.toDataURL(`image/${format}`);
      setConvertedImage(dataUrl);
      URL.revokeObjectURL(svgUrl);
    };

    img.src = svgUrl;
  };

  const handleDownload = () => {
    if (!convertedImage) return;

    const link = document.createElement("a");
    link.href = convertedImage;
    link.download = `vectorized_image.${fileFormat}`;
    link.click();
  };

  return (
    <div className="uploadimagepage">
      <EditImageTopToolBar
        clicked={clicked}
        setClicked={setClicked}
        onImageUpload={(imageData, file) => handleImageUpload(imageData, file)}
      />
      <div className="grid gap-2 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-10">
          <div className="canvas h-[50vh] w-full bg-slate-500 p-6 lg:h-screen">
            <div className="grid grid-cols-12 gap-2">
              {/* Display original uploaded image on the left side */}
              {uploadedImageUrl && (
                <div className="col-span-6">
                  <TransformWrapper className="w-full">
                    <TransformComponent>
                      <img src={uploadedImageUrl} alt="Uploaded" />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              )}
              {/* Display vectorized image on the right side */}
              {vectorizedImage && (
                <div className="col-span-6">
                  <TransformWrapper className="w-full">
                    <TransformComponent>
                      <img src={vectorizedImage} alt="Vectorized" />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <EditImageSideToolBar
            onVectorize={handleVectorize}
            onDownload={handleDownload}
            setFileFormat={setFileFormat}
            setIsGrayscale={setIsGrayscale}
          />
        </div>
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default UploadImagepage;
