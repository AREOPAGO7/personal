import Title from "@/components/title/Title";
import Navbar from "../navigation/Navbar";
import logo from '../assets/icons/logo.png'
import { Badge } from "../components/ui/badge";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="border-b-[1px] border-zinc-800 w-[80%] mx-auto pb-10 2xl:mt-0 mt-28">
        <Title></Title>
      </div>
      <div className="w-[100%] p-10 pt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 lg:w-[80%] mx-auto">

          <div className="flex bg-zinc-950 w-full h-[600px] rounded-xl border-[1px] border-zinc-800 shadow-md">
            <div className="flex border-b-[1px] border-zinc-800 h-fit w-[90%] mx-auto">
            <div className="m-10 h-fit  w-[100%] ">
              <h1 className="scroll-m-20 text-1xl text-zinc-50 font-extrabold tracking-tight lg:text-2xl">
                @ Anass Kalkhi
              </h1>
              <p className=" [&:not(:first-child)]:mt-2 text-zinc-400 md:text-[14px] text-[14px]">
               Full-stack web developer expert in <Badge className="h-4 w-fit" variant="secondary"> ReactJS</Badge> , and <Badge className="h-4 w-fit" variant="secondary"> Laravel </Badge> ,
                 for developing user-friendly applications.
              </p>
            </div>

            <div className="m-10 h-fit items-end mx-auto  justify-end w-[50%]">
              <img
                className="rounded-full mx-auto md:mt-3 mt-5"
                src={logo}
                width={70}
                alt="Neerajkumar"
              />
            </div>
            </div>
          </div>

          <div className="bg-zinc-950 w-full h-[600px] rounded-xl border-[1px] border-zinc-800 shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
