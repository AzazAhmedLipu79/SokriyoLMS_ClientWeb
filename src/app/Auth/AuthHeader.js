import React from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";

const AuthHeader = ({ title, desc }) => {
  return (
    <div className=" text-center p-4">
      <Image
        className="mx-auto"
        src={Logo}
        width={50}
        height={30}
        alt="Logo Of Skoriyo.com"
      />
      <h2 className="text-[22px] text-[#202124]">{title}</h2>
      <p className="text-[16px] font-sans ">
        {desc}
        <span className="text-primary  text-[#202124] hover:underline">
          sokriyo
        </span>
      </p>
    </div>
  );
};

export default AuthHeader;
