import ButtonC from "@/Shared/ButtonC";
import React from "react";
import thumbnail from "../../../../public/thumbnail.webp";
import Image from "next/image";
const page = ({ params }) => {
  return (
    <div className="container py-20">
      <div
        className="block md:flex justify-between items-stretch "
        id="course-header"
      >
        <div className=" p-5" id="header-content">
          <h2 className="text-[44px] font-bold">
            <span className="text-primary">Machine</span> Learning 10
            {params.cid} For Vegan
          </h2>
          <p className="py-3 leading-tight text-justify text-[#1f1f1f]">
            A constructive learning plan for machine learning by python. Where
            we'll cover most of overview of machine learning. You’ll learn
            in-demand skills that can have you job-ready in less than 6 months.
            No degree or experience required.
          </p>
          <ButtonC
            href={"/enroll/3554656"}
            text={"Enroll For 600 BDT"}
            theme={"primary"}
            type={"btn-primary my-4"}
          />
          <a
            className="a_link underline ml-3 text-[14px]"
            href="/Scholarship-programn"
          >
            Scholarship Available
          </a>
          <p className="py-3 text-[18px]">
            {" "}
            <b>118,767</b> already enrolled
          </p>
        </div>

        <div
          id="header-thumbnail"
          className="max-w-[560px] w-2/3  rounded shadow-2xl border-2 mx-auto "
        >
          <Image
            className="object-cover h-[220px]"
            src={thumbnail}
            width={560}
            height={220}
          />
          <div className="flex items-center justify-around p-2 pb-5">
            <div className="p-1 ">
              <h4 className="font-semibold text-[18px] text-[#1F1F1F]">
                Beginner Level
              </h4>
              <p className="text-[14px] text-[#636363] ">
                No Previous Experience necessary
              </p>
            </div>
            <div className="p-1 ">
              <h4 className="font-semibold text-[18px] text-[#1F1F1F]">
                Duration
              </h4>
              <p className="text-primary font-semibold text-[16px]">
                24 Hours & 47minute
              </p>
            </div>
            <div className="p-1">
              <h4 className="font-semibold text-[18px] text-[#1F1F1F]">
                Deadline
              </h4>
              <p className="text-primary font-semibold text-[16px]">
                26 December, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
