import React from "react";
import or from "../images/or.svg";
import share from "../images/editpage/Share.svg";
import youtube from "../images/editpage/YouTube.svg";

import EditImageTopToolBar from "../components/EditImageTopToolBar";
import EditImageSideToolBar from "../components/EditImageSideToolBar";

const UploadImagepage = () => {
  return (
    <div className="uploadimagepage">
      <EditImageTopToolBar />
      <div className="grid gap-2 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-9">
          <div className="canvas w-full bg-slate-500">
            <img src={or} alt="" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <EditImageSideToolBar />
        </div>
        <div className="flex justify-between gap-8 bg-theme-DarkBlue p-4 lg:hidden">
          <img src={youtube} alt="" />
          <img src={share} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UploadImagepage;
