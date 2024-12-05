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
      <div className="w-[100%] sm:px-28 p-10 pt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 lg:w-[100%] xl:w-[80%] mx-auto">
          <div className=" bg-zinc-950 w-full h-[600px] rounded-lg border-[1px] border-zinc-800 shadow-md">
            <div className="flex border-b-[1px] border-zinc-800 h-fit w-[90%] mx-auto ">
              <div className="  mx-4 my-7 h-fit  w-[100%] ">
                <h1 className="scroll-m-20  text-[18px] text-zinc-300 font-bold tracking-tight lg:text-[21px]">
                  Anass kalkhi
                </h1>
                <div className="flex  mt-1 ">
                  <p className=" [&:not(:first-child)]:mt-2 font-bold text-zinc-400 md:text-[14px] text-[12px]">
                    <i className="fa-solid text-zinc-500 fa-location-dot mr-2 ml-1 "></i>Based in
                    <span className="text-zinc-200 font-bold sm:ml-1 ml-1">
                      Safi, Morocco
                    </span>
                  </p>
                  <img src={M} alt="" className="w-5 h-3 sm:mt-[0.35rem] mt-[0.28rem] ml-2" />
                </div>
                <p className="leading-[1.3rem] [&:not(:first-child)]:mt-2 text-zinc-400 md:text-[14px] font-bold text-[12px]">
                  <span><i className="fa-solid fa-graduation-cap text-zinc-500 mr-[6px] sm:ml-[2px] ml-[2px]  sm:text-[12px] text-[10px]"></i></span>
                  Full-stack developer expert in React and Laravel .
                </p>
              </div>

              <div className="m-10 h-fit items-end mx-auto  justify-end sm:block hidden">
                <img
                  className="rounded-full mx-auto md:mt-0 sm:w-[70px] w-[50px]"
                  src={logo}
                  width={70}
                  alt=""
                />
              </div>
            </div>

            <div className="w-[90%] sm:ml-10 ml-8 mx-auto border-b-[1px] border-zinc-800 pb-4">
              <h1 className="lg:ml-[2%] mb-4 text-zinc-100 sm:text-[22px] font-bold mt-5">
                Skills
              </h1>
              <div>
                <p className="lg:ml-[4%]  text-zinc-400 sm:text-[16px] text-[14px] font-bold ">
                  Languages & framworks
                </p>
                <div>
                  <div className="mr-[14%] flex space-x-4 mx-auto mt-6 mb-4 w-[90%]">
                    
                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100 hover:text-cyan-400 justify-center items-center border-[1px] border-zinc-800 rounded shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-react   text-2xl"></i> 
                    
                    </div>

                  
                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-200  justify-center items-center border-[1px] border-zinc-800 rounded shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-js  text-2xl"></i>
                    
                    </div>

            
                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 rounded shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                    <i className='bx bxl-tailwind-css  text-3xl' ></i>
                    </div>

                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 rounded shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-python  text-2xl"></i>
                    </div>

                    
                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 rounded shadow-lg hover:bg-zinc-950 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-laravel  sm:text-2xl text-2xl"></i>
                    </div>
                  </div>{" "}
                </div>
              </div>


             


              <div>
                <p className="lg:ml-[4%]  text-zinc-400 sm:text-[16px] text-[14px] font-bold ">
                BackEnd &  Databases
                </p>
                <div>
                  <div className="mr-[12%]  flex  space-x-4 mx-auto mt-6 mb-4 w-[90%]">
                    
                    <div className="sm:w-20 xl:h-16 w-11 h-11 flex justify-center items-center border-[1px] border-zinc-800 rounded shadow-lg hover:bg-zinc-800 hover:border-zinc-700 transition">
                      <img src={S} width={"45%"} alt="" />
                    </div>

                  
                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100 hover:text-green-600 justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-mongodb sm:text-3xl text-2xl' ></i>
                    </div>

            
                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100 hover:text-amber-400 justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-firebase  sm:text-3xl text-2xl' ></i>
                    </div>

                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-php  sm:text-3xl text-2xl'></i>
                    </div>

                    
                    <div className="sm:w-20 xl:h-16 w-12 h-12 flex text-zinc-100  justify-center items-center border-[1px] border-zinc-800 hover:border-zinc-700 rounded shadow-lg hover:bg-zinc-900 transition">
                    <i className='bx bxl-nodejs  sm:text-3xl text-2xl' ></i>
                    </div>
                  </div>{" "}
                </div>
              </div>
              
              
              
        

            </div>

            
          </div>
             

             
        
        <div className="bg-zinc-950 w-full h-[600px] rounded-lg border-[1px] border-zinc-800 shadow-md">


        </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
