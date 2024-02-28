"use client"
import { HiMiniBars3 } from "react-icons/hi2";
import { RiEditBoxLine } from "react-icons/ri";
import { PiPlusCircle, PiPlusCircleFill } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiStopwatch } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";

const CartTop = ({ setOpen, open }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                <div className="flex justify-between items-center">
                    <button className="w-max"><HiMiniBars3 className="text-3xl lg:ml-4" /></button>
                    <button onClick={() => setOpen(!open)} className="w-max"><IoCloseCircleOutline className="text-3xl lg:hidden" /></button>
                </div>
                <div className="flex justify-between items-center gap-x-1 lg:gap-x-2 w-full">
                    <button className="bg-[#E7E9F6] text-[#7985CF] flex text-[10px] lg:text-base items-center justify-center gap-1 lg:gap-3 px-0.5 lg:px-2.5 py-2 w-full rounded">
                        <RiEditBoxLine className="text-[14px] lg:text-xl" />
                        <span className="font-medium">Note</span>
                    </button>
                    <button className="bg-[#E7E9F6] text-[#7985CF] flex text-[10px] lg:text-base items-center justify-center gap-1 lg:gap-3 px-0.5 lg:px-2.5 py-2 w-full text-center rounded">
                        <MdOutlineLocalShipping className="text-[14px] lg:text-xl" />
                        <span>Shipping</span>
                    </button>
                    <button className="bg-[#E7E9F6] text-[#7985CF] flex text-[10px] lg:text-base items-center justify-center gap-1 lg:gap-3 px-0.5 lg:px-2.5 py-2 w-full text-center rounded">
                        <GiStopwatch className="text-[14px] lg:text-xl" />
                        <span>Hold Orders</span>
                    </button>
                    <button className="bg-[#E7E9F6] text-[#7985CF] flex text-[10px] lg:text-base items-center justify-center gap-1 lg:gap-3 px-0.5 lg:px-2.5 py-2 w-full text-center rounded">
                        <PiPlusCircleFill className="text-[14px] lg:text-xl" />
                        <span>New Item</span>
                    </button>
                </div>
            </div>
            {/* user  */}
            <div className="bg-[#E7E9F6] flex items-center justify-between px-4 py-2 my-4 rounded">
                <div className="flex items-center gap-x-5">
                    <PiUserCircleFill className="text-3xl text-[#7985CF]" />
                    <p className="text-[#7985CF] font-semibold">Steve Jobs</p>
                </div>
                <button><PiPlusCircle className="text-3xl text-[#7985CF]" /></button>
            </div>
        </>
    )
}

export default CartTop