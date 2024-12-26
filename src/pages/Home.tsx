import Title from "@/components/title/Title";
import Navbar from "../navigation/Navbar";
import logo from "../assets/icons/logo.png";
import M from "../assets/icons/morocco.png";
import S from "../assets/icons/mysql.png";
import EducationalTimeline from "@/components/timeline/EducationalTimeline ";
import InteractiveModel from "@/components/3d/InteractiveModel";
import Footer from "@/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="border-b-[1px] border-zinc-800 w-[80%] mx-auto pb-10 2xl:mt-0 mt-28">
        <Title></Title>
      </div>
      <div className="w-[100%] sm:px-14 lg:px-28 p-8 pt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 lg:w-[100%] xl:w-[85%] mx-auto">
          <div className=" bg-zinc-950 w-full h-full rounded-lg border-[1px] border-zinc-800 shadow-md">
            <div className="flex border-b-[1px] border-zinc-800 h-fit w-[90%] mx-auto ">
              <div className="  mx-4 my-6 h-fit  w-[100%] ">
                <h1 className="scroll-m-20 mb-3 text-[18px] text-zinc-300 font-bold tracking-tight lg:text-[21px]">
                  Anass kalkhi
                </h1>
                <div className="flex  mt-1 ">
                  <p className=" [&:not(:first-child)]:mt-2 font-bold text-zinc-400 md:text-[14px] text-[12px]">
                    <i className="fa-solid text-zinc-500 fa-location-dot mr-2 ml-1 "></i>
                    Based in
                    <span className="text-zinc-200 font-bold sm:ml-1 ml-1">
                      Safi, Morocco
                    </span>
                  </p>
                  <img
                    src={M}
                    alt=""
                    className="w-5 h-3 sm:mt-[0.35rem] mt-[0.28rem] ml-2"
                  />
                </div>
                <p className="leading-[1.3rem] [&:not(:first-child)]:mt-2 text-zinc-400 md:text-[14px] font-bold text-[12px]">
                  <span>
                    <i className="fa-solid fa-graduation-cap text-zinc-500 mr-[6px] sm:ml-[2px] ml-[2px]  sm:text-[12px] text-[10px]"></i>
                  </span>
                  Full-stack developer .
                </p>
              </div>

              <div className="m-10 h-fit items-end mx-auto  justify-end ">
                <img
                  className="rounded-full mx-auto md:mt-0 sm:w-[70px] w-[70px]"
                  src={logo}
                  width={70}
                  alt=""
                />
              </div>
            </div>

            <div className="w-[90%] sm:ml-7 ml-8   mx-auto  sm:pb-11 md:pb-11 xl:pb-8">
              <h1 className="lg:ml-[2%] mb-4 text-zinc-200 sm:text-[22px] font-bold mt-5">
                Skills
              </h1>
              <div>
                <p className="lg:ml-[4%]  text-zinc-400 sm:text-[16px] text-[14px] font-bold ">
                  Languages & framworks
                </p>
                <div>
                  <div className="mr-[14%] flex space-x-4 mx-auto mt-6 mb-4 sm:w-[90%] w-[100%]">
                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100 hover:text-cyan-400 justify-center items-center border-[1px] border-zinc-800 rounded-lg shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                      <i className="fa-brands fa-react   text-2xl"></i>
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16  w-16 h-16 flex text-zinc-200  justify-center items-center border-[1px] border-zinc-800 rounded-lg shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                      <i className="fa-brands fa-js  text-2xl"></i>
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 rounded-lg  shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                      <i className="bx bxl-tailwind-css  text-3xl"></i>
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 rounded-lg  shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                      <i className="fa-brands fa-python  text-2xl"></i>
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 rounded-lg  shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                      <i className="fa-brands fa-laravel  sm:text-2xl text-2xl"></i>
                    </div>
                  </div>{" "}
                </div>
              </div>

              <div>
                <p className="lg:ml-[4%]  text-zinc-400 sm:text-[16px] text-[14px] font-bold ">
                  BackEnd & Databases
                </p>
                <div>
                  <div className="mr-[12%]  flex  space-x-4 mx-auto mt-6 mb-4 sm:w-[90%] w-[100%]">
                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex justify-center items-center border-[1px] border-zinc-800 rounded-lg  shadow-lg  hover:border-zinc-700 transition">
                      <img src={S} width={"45%"} alt="" />
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100 hover:text-green-600 justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded-lg  shadow-lg  transition">
                      <i className="bx bxl-mongodb sm:text-3xl text-2xl"></i>
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100 hover:text-amber-400 justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded-lg  shadow-lg  transition">
                      <i className="bx bxl-firebase  sm:text-3xl text-2xl"></i>
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded-lg  shadow-lg  transition">
                      <i className="bx bxl-php  sm:text-3xl text-2xl"></i>
                    </div>

                    <div className="sm:w-20 sm:h-14 xl:h-16 w-16 h-16 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded-lg  shadow-lg  transition">
                      <i className="bx bxl-nodejs  sm:text-3xl text-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-around items-center border-t-[1px] border-zinc-800 w-[90%] mx-auto">
              <div className=" h-full  w-[90%] mx-auto justify-between">
               
                  <h1 className="scroll-m-20 mx-4 sm:text-[18px] text-[16px] text-zinc-200 font-bold tracking-tight lg:text-[21px]">
                    3D Modeling
                  </h1>
                
               
              </div>
              <InteractiveModel />
            </div>
          </div>

          <div className="bg-zinc-950 w-full h-full rounded-lg border-[1px] border-zinc-800 shadow-md">
            <div className=" border-b-[1px] border-zinc-800 h-fit  w-[90%] mx-auto justify-between">
              <div className=" mt-7 h-fit   ">
                <h1 className="scroll-m-20 mx-4 text-[18px] text-zinc-200 font-bold tracking-tight lg:text-[21px]">
                  Certifications
                </h1>
              </div>
              <div className="">
                <div className="  flex  lg:space-x-4 sm:space-x-2 space-x-2 lg:mx-6 mt-4 mb-5 w-[100%]">
                  <div className="w-fit lg:px-4 px-3 h-fit p-1 lg:text-[12px] text-[10px] flex justify-center text-zinc-100 items-center border-[1px] border-zinc-800 rounded-full shadow-lg  hover:border-zinc-700 transition">
                    React by{" "}
                    <i className="bx bxl-meta lg:text-3xl text-2xl ml-3"></i>
                  </div>

                  <div className="w-fit lg:px-4 px-3 h-fit p-1 lg:text-[12px] text-[10px] flex justify-center text-zinc-100 items-center border-[1px] border-zinc-800 rounded-full shadow-lg  hover:border-zinc-700 transition">
                    React by{" "}
                    <i className="bx bxl-meta lg:text-3xl text-2xl ml-3"></i>
                  </div>

                  <div className="w-fit lg:px-4 px-3 h-fit p-1 lg:text-[12px] text-[10px] flex justify-center text-zinc-100 items-center border-[1px] border-zinc-800 rounded-full shadow-lg  hover:border-zinc-700 transition">
                    React by{" "}
                    <i className="bx bxl-meta lg:text-3xl text-2xl ml-3"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex border-b-[1px] h-[360px] border-zinc-800  w-[90%] mx-auto ">
              <div className="  mx-4 my-7 h-fit  w-[100%] ">
                <h1 className="scroll-m-20  text-[18px] text-zinc-200 font-bold tracking-tight lg:text-[21px]">
                  Educational Timeline
                </h1>
                <EducationalTimeline></EducationalTimeline>
              </div>
            </div>

            <div className=" mb-10 h-fit  w-[90%] mx-auto justify-between">
              <div className=" mt-7 h-fit   ">
                <h1 className="scroll-m-20 mx-4 text-[18px] text-zinc-300 font-bold tracking-tight lg:text-[21px]">
                  UI/UX Skills
                </h1>
              </div>
              <div className="">
                <div className="  flex  lg:space-x-4 sm:space-x-2 space-x-2 lg:mx-6 mt-4 mb-5 w-[100%]">
                  <div className="w-fit lg:px-4 px-3 h-fit p-2 lg:text-[12px] text-[10px] flex justify-center text-zinc-100 items-center border-[1px] border-zinc-800 rounded-xl shadow-lg  hover:border-zinc-700 transition">
                    Figma{" "}
                    <i className="bx bxl-figma lg:text-2xl text-2xl ml-3"></i>
                  </div>

                  <div className="w-fit lg:px-4 px-3 h-fit p-2 lg:text-[12px] text-[10px] flex justify-center text-zinc-100 items-center border-[1px] border-zinc-800 rounded-xl shadow-lg  hover:border-zinc-700 transition">
                    Adobe{" "}
                    <i className="bx bxl-adobe lg:text-2xl text-2xl ml-3"></i>
                  </div>

                  <div className="w-fit lg:px-4 px-3 h-fit p-2 lg:text-[12px] text-[10px] flex justify-center text-zinc-100 items-center border-[1px] border-zinc-800 rounded-xl shadow-lg  hover:border-zinc-700 transition">
                    Sketch{" "}
                    <i className="fa-brands fa-sketch lg:text-[20px] text-2xl ml-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
