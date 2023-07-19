import ButtonC from "@/Shared/ButtonC";
// import bg from "../../../public/bg.png";
const Hero = () => {
  return (
    <div className="container   max-w-[85%] w-[100%] hero  text-center  border rounded-full   border-pink-300 py-10  ">
      <h2 className="text-xl md:text-3xl font-semibold mb-6   ">
        Era Of Next Level EdTech
      </h2>
      <ButtonC
        text={"Let's Do it !"}
        type="btn-inverse animate-bounce"
        href={"/Login"}
      />
      <h2 className="text-xl md:text-3xl  font-semibold text-white mt-5 animate-bounce   ">
        With Hardwork, Contribution and Confidence
      </h2>
    </div>
  );
};

export default Hero;
