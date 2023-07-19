import React from "react";
import AuthHeader from "../AuthHeader";
import ButtonC from "@/Shared/ButtonC";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
const page = () => {
  return (
    <div className="  flex items-center justify-center min-h-screen py-4 ">
      <div className="border-2 rounded-lg w-full bg-slate-50  max-w-[448px] p-3  shadow-2xl ">
        <div className="flex justify-center ">
          <AuthHeader
            title={"Register"}
            desc={"To start a new journey with "}
          />
        </div>
        <form className="py-5  ">
          {" "}
          <div className="grid mx-auto w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" placeholder="Enter Your Full Name" />
          </div>
          <div className="grid mx-auto w-full max-w-sm items-center gap-1.5 py-2">
            <Label htmlFor="number">Phone Number</Label>
            <Input
              type="number"
              id="number"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="grid mx-auto w-full max-w-sm items-center gap-1.5 py-2 ">
            <Label htmlFor="email">Email Enter Here</Label>
            <Input type="email" id="email" placeholder="Enter Your Email" />
          </div>
          <div className="grid w-full mx-auto max-w-sm items-center gap-1.5 py-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>{" "}
          <div className="grid w-full mx-auto max-w-sm items-center gap-1.5 py-2">
            <Label htmlFor="cpassword">Confirm Password</Label>
            <Input
              type="password"
              id="cpassword"
              placeholder="Confirm Your Password"
            />
          </div>
        </form>
        <div className=" px-5">
          <div className="flex justify-between items-center py-4">
            <Link
              className="a_link text-[14px] font-[500] underline underline-offset-4 "
              href="/Auth/Login"
            >
              {" "}
              Have an account?{" "}
            </Link>
            <ButtonC
              text={"Let's Join"}
              theme={"primary"}
              type={"btn-primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
