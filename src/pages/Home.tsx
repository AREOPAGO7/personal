import Title from "@/components/title/Title";
import Navbar from "../navigation/Navbar";
import logo from "../assets/icons/logo.png";
import M from "../assets/icons/morocco.png";
import S from "../assets/icons/mysql.png"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="border-b-[1px] border-zinc-800 w-[80%] mx-auto pb-10 2xl:mt-0 mt-28">
        <Title></Title>
      </div>
      <div className="w-[100%] p-10 pt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 lg:w-[80%] mx-auto">
          <div className=" bg-zinc-950 w-full h-[600px] rounded-xl border-[1px] border-zinc-800 shadow-md">
            <div className="flex border-b-[1px] border-zinc-800 h-fit w-[90%] mx-auto">
              <div className="sm:m-7 mx-4 my-7 h-fit  w-[100%] ">
                <h1 className="scroll-m-20  text-2xl text-zinc-50 font-extrabold tracking-tight lg:text-2xl">
                  anasskalkhi
                </h1>
                <div className="flex  mt-1 ">
                  <p className=" [&:not(:first-child)]:mt-2 text-zinc-400 md:text-[14px] text-[14px]">
                    <i className="fa-solid fa-location-dot mr-2 "></i>Based in
                    <span className="text-zinc-100 sm:ml-1 ml-1">
                      Safi, Morocco
                    </span>
                  </p>
                  <img src={M} alt="" className="w-5 h-3 mt-[0.35rem] ml-2" />
                </div>
                <p className="leading-[1.3rem] [&:not(:first-child)]:mt-2 text-zinc-400 md:text-[14px] font-bold text-[14px]">
                  Full-stack web developer expert in ReactJS and Laravel .
                </p>
              </div>

              <div className="m-10 h-fit items-end mx-auto  justify-end sm:block hidden">
                <img
                  className="rounded-full mx-auto md:mt-0 sm:w-[80px] w-[60px]"
                  src={logo}
                  width={70}
                  alt=""
                />
              </div>
            </div>

            <div className="w-[90%] mx-auto border-b-[1px] border-zinc-800 pb-4">
              <h1 className="ml-[4%] mb-4 text-zinc-100 text-[22px] font-bold mt-10">
                Skills
              </h1>
              <div>
                <p className="ml-[4%]  text-zinc-400 text-[16px] font-bold ">
                  Languages & framworks
                </p>
                <div>
                  <div className=" flex space-x-4 mx-auto mt-4 mb-4 w-[90%]">
                    
                    <div className="w-14 h-14 flex text-zinc-100 hover:text-cyan-400 justify-center items-center border-[1px] border-zinc-900 rounded shadow-lg hover:bg-zinc-900 hover:border-zinc-800 transition">
                    <i className="fa-brands fa-react   text-2xl"></i> 
                    
                    </div>

                  
                    <div className="w-14 h-14 flex text-zinc-200 hover:text-amber-300 justify-center items-center border-[1px] border-zinc-900 rounded shadow-lg hover:bg-zinc-900 hover:border-zinc-800 transition">
                    <i className="fa-brands fa-js  text-2xl"></i>
                    
                    </div>

            
                    <div className="w-14 h-14 flex text-zinc-100 hover:text-cyan-400 justify-center items-center border-[1px] border-zinc-900 rounded shadow-lg hover:bg-zinc-900 hover:border-zinc-800 transition">
                    <i className='bx bxl-tailwind-css  text-3xl' ></i>
                    </div>

                    <div className="w-14 h-14 flex text-zinc-100 hover:text-cyan-400 justify-center items-center border-[1px] border-zinc-900 rounded shadow-lg hover:bg-zinc-900 hover:border-zinc-800 transition">
                    <i className="fa-brands fa-python  text-2xl"></i>
                    </div>

                    
                    <div className="w-14 h-14 flex text-zinc-100 hover:text-red-500 justify-center items-center border-[1px] border-zinc-900 rounded shadow-lg hover:bg-zinc-900 hover:border-zinc-800 transition">
                    <i className="fa-brands fa-laravel  text-2xl"></i>
                    </div>
                  </div>{" "}
                </div>
              </div>


             


              <div>
                <p className="ml-[4%]  text-zinc-400 text-[16px] font-bold ">
                BackEnd &  Databases
                </p>
                <div>
                  <div className="flex space-x-4 mx-auto mt-4 mb-4 w-[90%]">
                    
                    <div className="w-14 h-14 flex justify-center items-center border-[1px] border-zinc-900 rounded shadow-lg hover:bg-zinc-900 hover:border-zinc-800 transition">
                      <img src={S} width={"55%"} alt="" />
                    </div>

                  
                    <div className="w-14 h-14 flex text-zinc-100 hover:text-green-600 justify-center items-center border-[1px] border-zinc-900 hover:border-zinc-800 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-mongodb text-3xl' ></i>
                    </div>

            
                    <div className="w-14 h-14 flex text-zinc-100 hover:text-amber-400 justify-center items-center border-[1px] border-zinc-900 hover:border-zinc-800 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-firebase  text-3xl' ></i>
                    </div>

                    <div className="w-14 h-14 flex text-zinc-100 hover:text-indigo-500 justify-center items-center border-[1px] border-zinc-900 hover:border-zinc-800 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-php  text-3xl'></i>
                    </div>

                    
                    <div className="w-14 h-14 flex text-zinc-100 hover:text-lime-500 justify-center items-center border-[1px] border-zinc-900 hover:border-zinc-800 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-nodejs  text-3xl' ></i>
                    </div>
                  </div>{" "}
                </div>
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
