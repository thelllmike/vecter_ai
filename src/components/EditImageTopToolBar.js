import React from "react";
import icon1 from "../images/editpage/1.svg";
import icon2 from "../images/editpage/2.svg";
import icon3 from "../images/editpage/3.svg";
import icon4 from "../images/editpage/4.svg";
import icon5 from "../images/editpage/5.svg";
import icon6 from "../images/editpage/6.svg";
import icon7 from "../images/editpage/7.svg";
import icon8 from "../images/editpage/8.svg";
import icon9 from "../images/editpage/9.svg";
import icon10 from "../images/editpage/10.svg";
import icon11 from "../images/editpage/11.svg";
import share from "../images/editpage/Share.svg";
import youtube from "../images/editpage/YouTube.svg";
import { Button } from "./ui/button";

const EditImageTopToolBar = ({ clicked, setClicked, onImageUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result, file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="toolbar-top w-full bg-theme-DarkBlue p-4">
        <div className="flex justify-between">
          <div className="flex gap-[18px] lg:gap-8">
            <label htmlFor="file-upload" className="cursor-pointer">
              <img
                src={icon1}
                className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                alt="Upload"
              />
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <img
              src={icon2}
              className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
              alt="Icon2"
            />
            <img
              src={icon3}
              className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
              alt="Icon3"
            />
            <button onClick={() => setClicked(!clicked)}>
              <img
                src={icon4}
                className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                alt="Icon4"
              />
            </button>
            {clicked && (
              <div className="flex gap-[18px] lg:gap-8">
                <img
                  src={icon5}
                  className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                  alt="Icon5"
                />
                <img
                  src={icon6}
                  className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                  alt="Icon6"
                />
                <img
                  src={icon7}
                  className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                  alt="Icon7"
                />
                <img
                  src={icon8}
                  className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                  alt="Icon8"
                />
                <img
                  src={icon9}
                  className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                  alt="Icon9"
                />
                <img
                  src={icon10}
                  className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                  alt="Icon10"
                />
                <img
                  src={icon11}
                  className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                  alt="Icon11"
                />
              </div>
            )}
          </div>
          {clicked && (
            <div className="hidden items-center gap-8 lg:flex">
              <p className="text-white">Edit Segmented Image</p>
              <div className="flex items-center gap-4">
                <Button className="h-auto bg-white py-1 text-theme-DarkBlue hover:bg-white">
                  Cancel
                </Button>
                <Button className="h-auto bg-theme-Blue py-1 hover:bg-theme-Blue">
                  Save
                </Button>
              </div>
            </div>
          )}
          {!clicked && (
            <div className="flex gap-8">
              <img src={share} alt="Share" />
              <img src={youtube} alt="YouTube" />
            </div>
          )}
        </div>
      </div>
      {clicked && (
        <div className="flex items-center justify-center gap-8 p-2 lg:hidden">
          <p>Edit Segmented Image</p>
          <div className="flex items-center gap-4">
            <Button className="h-auto py-1">Cancel</Button>
            <Button className="h-auto bg-theme-Blue py-1 hover:bg-theme-Blue">
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditImageTopToolBar;
