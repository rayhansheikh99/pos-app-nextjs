
import { HiMiniBars3 } from "react-icons/hi2";
import { RiEditBoxLine } from "react-icons/ri";
import { PiPlusCircle, PiPlusCircleFill } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiStopwatch } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";

export default function Home() {
  return (

    <main className="max-w-[1500px] mx-auto min-h-screen py-20">
      <div className='grid grid-cols-2 gap-x-5'>
        <div className='w-full h-full'>
          <div className="flex justify-between items-center gap-x-2">
            <HiMiniBars3 className="text-3xl ml-4" />
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <RiEditBoxLine className="text-xl" />
              <p className="font-medium">Note</p>
            </div>
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <MdOutlineLocalShipping className="text-xl" />
              <p>Shipping</p>
            </div>
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <GiStopwatch className="text-xl" />
              <p>Hold Orders</p>
            </div>
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <PiPlusCircleFill className="text-xl" />
              <p>New Item</p>
            </div>
          </div>
          {/* user  */}
          <div className="bg-[#E7E9F6] flex items-center justify-between px-4 py-2 my-4 rounded">
            <div className="flex items-center gap-x-5">
              <PiUserCircleFill className="text-3xl text-[#7985CF]" />
              <p className="text-[#7985CF] font-semibold">Steve Jobs</p>
            </div>
            <PiPlusCircle className="text-3xl text-[#7985CF]" />
          </div>
          {/* cart list */}
          
        </div>
        <div className='bg-red-400 w-full h-full'>
          hello
        </div>
      </div>
    </main>


  )
}
