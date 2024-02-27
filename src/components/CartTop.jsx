import { HiMiniBars3 } from "react-icons/hi2";
import { RiEditBoxLine } from "react-icons/ri";
import { PiPlusCircle, PiPlusCircleFill } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiStopwatch } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";

const CartTop = () => {
    return (
        <>
            <div className="flex justify-between items-center gap-x-2">
                <button><HiMiniBars3 className="text-3xl ml-4" /></button>
                <button className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
                    <RiEditBoxLine className="text-xl" />
                    <span className="font-medium">Note</span>
                </button>
                <button className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
                    <MdOutlineLocalShipping className="text-xl" />
                    <span>Shipping</span>
                </button>
                <button className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
                    <GiStopwatch className="text-xl" />
                    <span>Hold Orders</span>
                </button>
                <button className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
                    <PiPlusCircleFill className="text-xl" />
                    <span>New Item</span>
                </button>
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