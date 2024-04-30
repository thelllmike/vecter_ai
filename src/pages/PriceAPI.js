import React from "react";
import checkedImage from "../images/Check.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import footerImage from "../images/footer.jpg";
import "../styles/PriceAPI.css";

import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const PriceAPI = () => {
  return (
    <div className="apiprice">
      <Navbar />
      <div class="container mt-10 text-center">
        <div>
          <div className="flex flex-col items-center">
            <h3 className=" text-xl font-bold text-theme-DarkBlue lg:text-3xl">
              CONVERT MORE IMAGES FOR LESS
            </h3>
            <p className="mt-2 max-w-2xl text-lg font-medium text-theme-DarkGray lg:text-xl">
              How many images do you want to convert?
            </p>
          </div>
          <div class="buttons mt-14">
            <button type>
              <NavLink to="/priceweb">Web</NavLink>
            </button>
            <button type>
              <NavLink to="/priceapi">API</NavLink>
            </button>
          </div>
        </div>
        <div className="container mt-10 max-w-[1024px] ">
          <div className=" mb-8 border-[1px] border-theme-DarkGray p-16">
            <Slider defaultValue={[30]} max={100} step={1} />
          </div>
          <div class="grid gap-4 lg:grid-cols-2 lg:gap-8">
            <Card className=" rounded-none border-theme-DarkGray">
              <CardHeader>
                <CardTitle className="pb-1">API Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" inline-flex items-center text-3xl font-normal">
                  $&nbsp;
                  <span className=" inline-flex">
                    <p className=" text-6xl font-bold">10</p>
                    <p className=" text-lg font-light">.99</p>
                  </span>
                </p>
                <CardDescription className="mt-6">
                  /Month (cancel anytime)
                </CardDescription>
                <div className="mt-6">
                  <Button className=" border-theme-Blue text-theme-Blue hover:bg-theme-Blue gap-2 border-2 bg-white hover:bg-opacity-5">
                    Continue <i class="fa-solid fa-arrow-right"></i>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="mt-10 flex-col items-start gap-4 md:items-center lg:items-start">
                <div className="flex items-start gap-4 text-left">
                  <img src={checkedImage} className=" w-[24px]" alt="" />
                  <p>30 Images / Month</p>
                </div>
              </CardFooter>
            </Card>
            <Card className=" rounded-none border-theme-DarkGray">
              <CardHeader>
                <CardTitle className="pb-1">API Credit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" inline-flex items-center text-3xl font-normal">
                  $&nbsp;
                  <span className=" inline-flex">
                    <p className=" text-6xl font-bold">19</p>
                    <p className=" text-lg font-light">.99</p>
                  </span>
                </p>
                <CardDescription className="mt-6">One Time</CardDescription>
                <div className="mt-6">
                  <Button className=" border-theme-Blue text-theme-Blue hover:bg-theme-Blue gap-2 border-2 bg-white hover:bg-opacity-5">
                    Continue <i class="fa-solid fa-arrow-right"></i>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="mt-10 flex-col items-start gap-4 md:items-center lg:items-start">
                <div className="flex items-start gap-4 text-left">
                  <img src={checkedImage} className=" w-[24px]" alt="" />
                  <p>30 Images / Month</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div class="mt-[12%] flex flex-col gap-10">
          <h3 className=" text-xl font-bold text-theme-DarkBlue lg:text-3xl">
            Frequently Asked Questions
          </h3>
          <div class="container max-w-[1024px]">
            <Accordion type="single" collapsible>
              <AccordionItem
                className=" mb-6 border-2 border-theme-DarkGray"
                value="item-1"
              >
                <AccordionTrigger className="px-6">
                  What a Conversion minute?
                </AccordionTrigger>
                <AccordionContent>Content</AccordionContent>
              </AccordionItem>
              <AccordionItem
                className=" mb-6 border-2 border-theme-DarkGray"
                value="item-2"
              >
                <AccordionTrigger className="px-6">
                  What a Conversion minute?
                </AccordionTrigger>
                <AccordionContent>Content</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="container-fluid footer mt-5">
        <div className="row">
          <img src={footerImage} alt="Footer" />
        </div>
      </div>
    </div>
  );
};

export default PriceAPI;
