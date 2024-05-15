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

const EditImageSideToolBar = ({ onVectorize, onDownload, setFileFormat }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between gap-4 text-left">
        <Label htmlFor="details" className="">
          Details
        </Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="High" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between gap-4 text-left">
        <Label htmlFor="bg-transparency" className="">
          BG Transparency
        </Label>
        <Switch className="data-[state=checked]:bg-theme-LightBlue " />
      </div>
      <div className="flex items-center justify-between gap-4 text-left">
        <Label htmlFor="color" className="">
          Color
        </Label>
        <Switch className="data-[state=checked]:bg-theme-LightBlue " />
      </div>
      <div className="flex items-center text-left">
        <Tabs defaultValue="unlimited" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="unlimited" className="w-1/2">
              <img src={unlimited} alt="Unlimited" />
              Unlimited
            </TabsTrigger>
            <TabsTrigger value="custom" className="w-1/2">
              <img src={custom} alt="Custom" />
              Custom
            </TabsTrigger>
          </TabsList>
          <TabsContent value="unlimited" className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 text-left">
              <Label htmlFor="grayscale" className="">
                Grayscale
              </Label>
              <Switch className="data-[state=checked]:bg-theme-LightBlue " />
            </div>
            <div className="flex items-center justify-between gap-4 text-left">
              <Label htmlFor="black-white" className="">
                Black & White
              </Label>
              <Switch className="data-[state=checked]:bg-theme-LightBlue " />
            </div>
            <div className="flex items-center justify-between gap-4 text-left">
              <Label htmlFor="file-format" className="">
                File Format
              </Label>
              <Select onValueChange={setFileFormat}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="SVG" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="svg">SVG</SelectItem>
                  <SelectItem value="jpg">JPG</SelectItem>
                  <SelectItem value="png">PNG</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="custom">Custom</TabsContent>
        </Tabs>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2 text-left">
        <Button
          className="w-full bg-theme-LightBlue hover:bg-theme-DarkBlue"
          onClick={onVectorize}
        >
          Vectorize
        </Button>
        <Button
          variant="outline"
          className="w-full border-theme-LightBlue text-theme-DarkBlue hover:bg-theme-DarkBlue hover:bg-opacity-15"
          onClick={onDownload}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default EditImageSideToolBar;
