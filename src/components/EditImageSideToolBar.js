import React from "react";

import unlimited from "../images/unlimited.svg";
import custom from "../images/custom.svg";

import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";

const EditImageSideToolBar = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between gap-4 text-left">
        <Label htmlFor="email" className="">
          Details
        </Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="High" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between gap-4 text-left">
        <Label htmlFor="email" className="">
          BG Transparency
        </Label>
        <Switch className="data-[state=checked]:bg-theme-LightBlue " />
      </div>
      <div className="flex items-center justify-between gap-4 text-left">
        <Label htmlFor="email" className="">
          Color
        </Label>
        <Switch className="data-[state=checked]:bg-theme-LightBlue " />
      </div>
      <div className="flex items-center text-left">
        <Tabs defaultValue="unlimited" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="unlimited" className="w-1/2">
              <img src={unlimited} alt="" />
              Unlimited
            </TabsTrigger>
            <TabsTrigger value="custom" className="w-1/2">
              <img src={custom} alt="" />
              Custom
            </TabsTrigger>
          </TabsList>
          <TabsContent value="unlimited" className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 text-left">
              <Label htmlFor="email" className="">
                Grayscale
              </Label>
              <Switch className="data-[state=checked]:bg-theme-LightBlue " />
            </div>
            <div className="flex items-center justify-between gap-4 text-left">
              <Label htmlFor="email" className="">
                Black & White
              </Label>
              <Switch className="data-[state=checked]:bg-theme-LightBlue " />
            </div>
            <div className="flex items-center justify-between gap-4 text-left">
              <Label htmlFor="email" className="">
                File Format
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="SVG" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medium">JPG</SelectItem>
                  <SelectItem value="low">PNG</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="custom">Custom</TabsContent>
        </Tabs>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2 text-left">
        <Button className="w-full bg-theme-LightBlue hover:bg-theme-DarkBlue">
          Vectorize
        </Button>
        <Button
          variant="outline"
          className="w-full border-theme-LightBlue text-theme-DarkBlue hover:bg-theme-DarkBlue hover:bg-opacity-15"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default EditImageSideToolBar;
