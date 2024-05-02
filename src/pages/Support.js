import React from "react";
import Navbar from "../components/Navbar";
import footerImage from "../images/footer.jpg";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";

const Support = () => {
  return (
    <div className="support">
      <Navbar />
      <div className="container mt-10 text-center">
        <div className="flex flex-col items-center">
          <h3 className=" text-xl font-bold text-theme-DarkBlue lg:text-3xl">
            CONTACT SUPPORT
          </h3>
          <p className="mt-2 max-w-2xl text-lg font-medium text-theme-DarkGray lg:text-xl">
            Common Problems & Solutions
          </p>
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
                    Subject
                  </Label>
                  <RadioGroup>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">
                        Cancel Subscrition / Stop Charging Me
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">I Need A Recipt</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-three" />
                      <Label htmlFor="option-two">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <Label htmlFor="email" className="font-bold">
                    I'm feeling...
                  </Label>
                  <RadioGroup className=" flex flex-wrap">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Happy 😊</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Alright 😐</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-three" />
                      <Label htmlFor="option-two">Frustrated 😑</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-three" />
                      <Label htmlFor="option-two">Angry 😡</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <Label htmlFor="email" className="font-bold">
                    Message
                  </Label>
                  <Textarea
                    placeholder="Message"
                    className="border-2 border-theme-DarkGray"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-10 items-center justify-center">
                <Button className="rounded-none bg-theme-LightBlue px-8 py-4 text-[1.2rem] font-light text-white hover:bg-theme-LightBlue ">
                  SEND SUPPORT REQUEST
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-10 w-full max-w-[768px] text-left">
              <p>
                Try another Browser / Computer <br />
                Something not working? Nine times out of ten, switching browser
                / computer resolves the issue.
              </p>
              <p className=" mt-6">
                Out Of Memory Error <br />
                If you get an error message along these lines, then you may need
                to close some other tabs / ap-plications or restart your
                computer / browser to free up some memory.
              </p>
              <p className=" mt-6">
                Malware <br />
                Malicious software that has been accidentally installed can
                break your browser by redirecting web requests to pages filled
                with ads.
              </p>
              <p className=" mt-6">
                Be especially careful when downloading software from the
                internet as unscrupulous people add malware to the installers
                and then cripple your computer.
              </p>
              <p className=" mt-6">
                If this has happened to you, you'll want to remove the malware
                as soon as possible. Microsoft has a free malware removal tool
                that you may want to try.
              </p>
              <p className=" mt-6">
                Plug-ins / Extensions <br />
                Buggy plug-ins & extensions break the web on a regular basis,
                and can compromise your online security and privacy. Never
                install questionable plug-ins or extensions. Avoid any that are
                not absolutely necessary.
              </p>
              <p className=" mt-6">
                Anti-virus Software (McAfee. Norton, etc) <br />
                These can interfere with your web browser, and break it in
                subtle ways.
              </p>
              <p className=" mt-6">
                Firewalls / Proxies <br />
                These can interfere with web requests in general and web sockets
                in particular.
              </p>
              <p className=" mt-6">
                If your firewall / proxy is configured in such a way that it
                blocks normal operation of this site, your only option is to
                have it reconfigured. Sorry!
              </p>
            </div>
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

export default Support;
