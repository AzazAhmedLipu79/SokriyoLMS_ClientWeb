"use client";
import React, { useState } from "react";
import AuthHeader from "../AuthHeader";
import ButtonC from "@/Shared/ButtonC";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
const page = () => {
  let [showPass, setShowPass] = useState(false);
  return (
    <div className=" flex items-center justify-center min-h-screen py-4 ">
      <div className="border-2  w-full max-w-[448px] rounded-lg  p-3 h-[500px] shadow-2xl ">
        <div className="flex justify-center ">
          <AuthHeader title={"Login"} desc={"To continue with "} />
        </div>
        <form className="py-5  ">
          <div className="grid mx-auto w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Enter Your Email Here</Label>
            <Input
              type="email"
              id="email"
              // placeholder="Enter Your Email"
            />
          </div>

          <div className="grid w-full mx-auto max-w-sm items-center gap-1.5 py-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type={showPass ? "text" : "password"}
              id="password"
              // placeholder="Enter Your Password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPass((prev) => !prev);
              }}
              className={"text-[10px] rounded bg-slate-800 text-slate-200"}
            >
              {showPass ? "Hide" : "Show"} Password
            </button>
          </div>
        </form>
        <div className=" px-5">
          <a
            href="/forget-email"
            className="a_link text-[14px] hover:font-semibold hover:underline leading-[0.25 px]"
          >
            Forgot email?
          </a>

          <div className="flex justify-between items-center py-4">
            <Link
              className="a_link text-[14px] font-[600] underline underline-offset-2  "
              href="/Auth/Register"
            >
              {" "}
              Create account{" "}
            </Link>
            <ButtonC text={"Allow In"} theme={"primary"} type={"btn-primary"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
