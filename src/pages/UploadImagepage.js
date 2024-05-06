import React, { useState } from "react";
import or from "../images/or.png";
import vectorImg from "../images/vector-image.png";
import share from "../images/editpage/Share.svg";
import youtube from "../images/editpage/YouTube.svg";
import "../styles/Uploadimagepage.css";

import EditImageTopToolBar from "../components/EditImageTopToolBar";
import EditImageSideToolBar from "../components/EditImageSideToolBar";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const UploadImagepage = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="uploadimagepage">
      <EditImageTopToolBar clicked={clicked} setClicked={setClicked} />
      <div className="grid gap-2 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-9">
          <div className="canvas h-full w-full bg-slate-500 p-6">
            <div className="grid grid-cols-12 gap-2">
              {!clicked && (
                <div className="col-span-6">
                  <img src={or} alt="" />
                </div>
              )}
              <div className={clicked ? "col-span-12" : "col-span-6"}>
                <TransformWrapper className=" w-full">
                  <TransformComponent>
                    <img src={vectorImg} alt="" />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <EditImageSideToolBar />
        </div>
      </div>
    </div>
  );
};

export default UploadImagepage;
