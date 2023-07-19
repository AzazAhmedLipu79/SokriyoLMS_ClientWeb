import Image from "next/image";
import React from "react";
import thumbnail from "../../../public/thumbnail.webp";
import ButtonC from "@/Shared/ButtonC";

const page = () => {
  const courses = [1, 2, 3, 4, 5, 6];
  return (
    <section className="py-20">
      {/* COURSE HEADER */}
      <h2 className="text-center text-2xl hover:underline bg-primary text-white font-bold px-10 py-4  ">
        WELCOME TO COURSE PAGE
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-4">
        {courses.map((course) => {
          return (
            <div className="bg-pink-200 p-4 m-4 rounded-3xl hover:scale-y-105  flex justify-around items-center md:block">
              <Image
                className="min-h-[150px] xl:w-full h-auto object-cover rounded-3xl mx-auto"
                src={thumbnail}
                width="250"
                // alt -title
              />
              <div className="px-2 ">
                <h2 className="text-lg font-semibold text-primary hover:font-extrabold py-2 xl:text-[20px]">
                  Machine Learning 10{course}
                </h2>
                <ButtonC
                  text="600 BDT"
                  theme={"primary"}
                  type="btn-inverse"
                  href={`/courses/${course}`}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Curriculum */}
    </section>
  );
};

export default page;
