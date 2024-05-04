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

const EditImageTopToolBar = () => {
  return (
    <div className="tollbar-top w-full bg-theme-DarkBlue p-4">
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-8">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
          <img src={icon5} alt="" />
          <img src={icon6} alt="" />
          <img src={icon7} alt="" />
          <img src={icon8} alt="" />
          <img src={icon9} alt="" />
          <img src={icon10} alt="" />
          <img src={icon11} alt="" />
        </div>
        <div className=" hidden gap-8 lg:flex">
          <img src={share} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EditImageTopToolBar;
