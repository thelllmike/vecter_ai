import React from "react";
import Navbar from "../components/Navbar";
import footerImage from "../images/footer.jpg";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Register = () => {
  return (
    <div className="support">
      <Navbar />
      <div className="container mt-10 text-center">
        <div className="flex flex-col items-center">
          <h3 className=" text-xl font-bold text-theme-DarkBlue lg:text-3xl">
            Register
          </h3>
          <div className="mt-10 w-full max-w-[768px]">
            <Card className=" rounded-none border-theme-DarkGray ">
              <CardContent className="flex flex-col items-start gap-6 pt-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <Label htmlFor="email" className="font-bold">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    className=" border-2 border-theme-DarkGray"
                    placeholder="Email"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <Label htmlFor="email" className="font-bold">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    className=" border-2 border-theme-DarkGray"
                    placeholder="Password"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <Label htmlFor="email" className="font-bold">
                    Re-Enter Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    className=" border-2 border-theme-DarkGray"
                    placeholder="Password"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-10 items-center justify-center">
                <Button className="rounded-none bg-theme-LightBlue px-8 py-4 text-[1.2rem] font-light text-white hover:bg-theme-LightBlue ">
                  REGISTER
                </Button>
              </CardFooter>
            </Card>
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

export default Register;
