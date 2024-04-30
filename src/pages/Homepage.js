import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";
import actionImage from "../images/action-image.svg";

// import exampleImage from "../images/example.svg";
import carousel1 from "../images/1.png";
import carousel2 from "../images/2.png";
import carousel3 from "../images/3.png";
import carousel4 from "../images/4.png";
import carousel5 from "../images/5.png";
import carousel6 from "../images/6.png";

import rectangleImage1 from "../images/Rectangle (1).svg";
import rectangleImage2 from "../images/Rectangle (2).svg";
import rectangleImage3 from "../images/Rectangle (3).svg";
import bottomImage1 from "../images/7.png";
import bottomImage2 from "../images/8.png";
import bottomImage3 from "../images/9.png";
import footerImage from "../images/footer.jpg";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-10 text-center">
        <h3 className=" text-xl font-bold text-theme-DarkBlue lg:text-3xl">
          CONVERT IMAGES INTO VECTORS IN FULLCOLOR
        </h3>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-theme-DarkGray lg:text-xl">
          Easily transform your PNG and JPG images into SVG vectors with
          seamless automation powered AI.
        </p>
      </div>

      <div className="upload-section flex items-center justify-center bg-theme-LightGray py-16 ">
        <div className="dot-square flex flex-col gap-4 rounded-[30px] border-2 border-dashed border-theme-LightBlue px-[20%] py-10">
          <NavLink to="/uploadimage">
            <Button className="rounded-none bg-theme-DarkBlue px-8 py-4 text-[1.2rem] font-light text-white">
              Upload Image
            </Button>
          </NavLink>
          <div className=" text-[1rem] text-theme-DarkGray">
            DRAG IMAGE HERE
          </div>
        </div>
      </div>

      <div className=" mt-[12%] flex">
        <div className="relative flex w-full justify-center bg-theme-LightBlue px-8 py-6 text-start lg:py-12">
          <p className=" w-full max-w-[540px] text-lg text-white lg:max-w-[768px] lg:text-3xl">
            See it in Action
          </p>
          <img
            className="absolute -top-[20%] right-[10%] w-1/3 md:-top-1/2 md:w-1/4 lg:right-1/4"
            src={actionImage}
            alt="Action"
          />
        </div>
      </div>

      <div className="mt-[12%] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-theme-DarkBlue lg:text-3xl">
            EXAMPLES
          </h3>
          <p className="mx-auto max-w-2xl text-lg font-medium text-theme-DarkGray lg:text-xl">
            Here are a few examples of the vectoring output
          </p>
        </div>
        <div className="container">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center">
                  <img
                    src={carousel1}
                    className="w-2/3 rounded border-2 border-solid border-theme-LightGray bg-white"
                    alt="Example1"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center">
                  <img
                    src={carousel2}
                    className="w-2/3 rounded border-2 border-solid border-theme-LightGray bg-white"
                    alt="Example2"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center">
                  <img
                    src={carousel3}
                    className="w-2/3 rounded border-2 border-solid border-theme-LightGray bg-white"
                    alt="Example3"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center">
                  <img
                    src={carousel4}
                    className="w-2/3 rounded border-2 border-solid border-theme-LightGray bg-white"
                    alt="Example4"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center">
                  <img
                    src={carousel5}
                    className="w-2/3 rounded border-2 border-solid border-theme-LightGray bg-white"
                    alt="Example5"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center">
                  <img
                    src={carousel6}
                    className="w-2/3 rounded border-2 border-solid border-theme-LightGray bg-white"
                    alt="Example6"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-[1%] lg:-left-12" />

            <CarouselNext className="-right-[1%] lg:lg:-right-12" />
          </Carousel>
        </div>
      </div>

      <div className=" mt-[12%] flex flex-col gap-10">
        <h3 className="text-xl font-bold text-theme-DarkBlue lg:text-3xl">
          How it Works
        </h3>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:items-start md:gap-16 lg:items-end lg:justify-between">
            <div className="flex flex-col items-center gap-8">
              <img src={rectangleImage1} alt="Rectangle 1" />
              <div className="flex flex-col items-center gap-2">
                <h4 className=" text-sm text-theme-LightBlue md:text-[1.2rem] lg:text-[1.75rem]">
                  Upload
                </h4>
                <p className=" w-[100px] text-theme-DarkGray">
                  Upload Image that you want to vectorize
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <img src={rectangleImage2} alt="Rectangle 2" />
              <div className="flex flex-col items-center gap-2">
                <h4 className=" text-sm text-theme-LightBlue md:text-[1.2rem] lg:text-[1.75rem]">
                  Process
                </h4>
                <p className=" w-[100px] text-theme-DarkGray">
                  convert your image from pixels to geometric shapes
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <img src={rectangleImage3} alt="Rectangle 3" />
              <div className="flex flex-col items-center gap-2">
                <h4 className=" text-sm text-theme-LightBlue md:text-[1.2rem] lg:text-[1.75rem]">
                  download
                </h4>
                <p className=" w-[100px] text-theme-DarkGray">
                  preview of the result and download it if you like
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[12%] flex flex-col items-center gap-10">
        <h3 className="w-1/2 text-center text-xl font-bold text-theme-DarkBlue lg:text-3xl">
          Auto-convert your images to full color vectors for your needs
        </h3>

        <div className="container">
          <div className="flex justify-center gap-8">
            <img
              src={bottomImage1}
              className=" w-24 md:w-32 lg:w-64"
              alt="Bottom"
            />
            <img
              src={bottomImage2}
              className=" w-24 md:w-32 lg:w-64"
              alt="Bottom"
            />
            <img
              src={bottomImage3}
              className=" w-24 md:w-32 lg:w-64"
              alt="Bottom"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid footer mt-[15%]">
        <div className="row">
          <img src={footerImage} alt="Footer" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
