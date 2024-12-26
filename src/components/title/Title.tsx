import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Title = () => {
  return (
    <div className=" ml-[2%] mt-24">
      <p className="text-zinc-400  font-semibold hover:border-b-[1px] w-fit h-6 mb-2 hover:border-zinc-400 hover:cursor-pointer">
        <Link to="/work">
          see my work
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </p>
      <h1 className="scroll-m-20 text-[30px] text-zinc-50 font-extrabold tracking-tight lg:text-[28px]">
        Innovative Web 
      </h1>
      <h1 className="scroll-m-20 text-[30px] text-zinc-50 font-extrabold tracking-tight lg:text-[28px]">
         Development Solutions
      </h1>
    </div>
  );
};

export default Title;
