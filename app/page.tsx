import Image from "next/image";
import check from "../public/check.png";
import x from "../public/x.png";
export default function Home() {
  return (
    <main className="bg-[#F8FAFE] max-w-[1201px] flex justify-between gap-8 items-center p-12 m-auto rounded-lg">
      <div className=" w-[327px] h-[655px] bg-white p-2 text-center">
        <p className="bg-[#F8FAFE] text-center text-lg font-medium rounded py-4">
          Free
        </p>
        <div>
          <h1 className="text-6xl font-extrabold mt-16">$0</h1>
          <p className=" text-lg uppercase font-medium mt-3">
            Great for starters{" "}
          </p>
          <p className="font-black text-lg w-[250px] mt-8">
            Discover how to create your first projects.
          </p>
        </div>

        <button className=" mt-16 mb-10 border uppercase border-[#27264B] w-full py-5 rounded-md text-lg font-medium bg-transparent hover:bg-[#27264B] hover:text-white">
          {" "}
          Get Started
        </button>

        <div className="px-5">
          <div className="flex items-center gap-3 ">
            <Image src={check} alt="" />
            <p className=" font-black">3 new projects / month</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <Image src={x} alt="" />
            <p className=" font-black">Basic interaction</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={x} alt="" />
            <p className=" font-black">Assets library</p>
          </div>
        </div>
      </div>

      <div className=" w-[327px] h-[655px] bg-white p-2 text-center">
        <p className="bg-gradient-to-r from-[#FFB0C6] to-[#FFCC6D] text-center text-lg font-medium rounded py-4">
          Free
        </p>
        <div>
          <h1 className="text-6xl font-extrabold mt-16">$0</h1>
          <p className=" text-lg uppercase font-medium mt-3">
            Great for starters{" "}
          </p>
          <p className="font-black text-lg w-[250px] mt-8">
            Discover how to create your first projects.
          </p>
        </div>

        <button className=" mt-16 mb-10 border uppercase  border-[#27264B] w-full py-5 rounded-md text-lg font-medium bg-transparent hover:bg-[#27264B] hover:text-white">
          {" "}
          Get Started
        </button>

        <div className="px-5">
          <div className="flex items-center gap-3 ">
            <Image src={check} alt="" />
            <p className=" font-black">3 new projects / month</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <Image src={x} alt="" />
            <p className=" font-black">Basic interaction</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={x} alt="" />
            <p className=" font-black">Assets library</p>
          </div>
        </div>
      </div>
      <div className=" w-[327px] h-[655px] bg-white p-2 text-center">
        <p className="bg-gradient-to-r from-[#C3D4FF] to-[#B26FFE] text-center text-lg font-medium rounded py-4">
          Free
        </p>
        <div>
          <h1 className="text-6xl font-extrabold mt-16">$0</h1>
          <p className=" text-lg uppercase font-medium mt-3">
            Great for starters{" "}
          </p>
          <p className="font-black text-lg w-[250px] mt-8">
            Discover how to create your first projects.
          </p>
        </div>

        <button className=" mt-16 mb-10 border uppercase font-medium border-[#27264B] w-full py-5 rounded-md text-lg font-medium bg-transparent hover:bg-[#27264B] hover:text-white">
          {" "}
          Get Started
        </button>

        <div className="px-5">
          <div className="flex items-center gap-3 ">
            <Image src={check} alt="" />
            <p className=" font-black">3 new projects / month</p>
          </div>
          <div className="flex items-center gap-3 my-6">
            <Image src={x} alt="" />
            <p className=" font-black">Basic interaction</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={x} alt="" />
            <p className=" font-black">Assets library</p>
          </div>
        </div>
      </div>
    </main>
  );
}
