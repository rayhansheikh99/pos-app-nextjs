import { IoCloseCircleOutline } from "react-icons/io5";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { FaHandRock } from "react-icons/fa";

const CartBottom = () => {
    return (
        <div className="flex justify-between items-center gap-1 lg:gap-3 mt-6">
            <button className="flex items-center justify-center gap-2 bg-[#FADEDD] py-1.5 lg:px-3 w-full lg:text-2xl text-[10px] font-medium rounded text-[#E55C57]">
                <IoCloseCircleOutline className="text-[14px] lg:text-xl"/>
                <span>Cancel</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#E7E9F6] py-1.5 lg:px-3 w-full lg:text-2xl text-[10px] font-medium rounded text-[#3674D9]">
                <FaHandRock className="text-[14px] lg:text-xl"/>
                <span>Hold</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#E7E9F6] py-1.5 lg:px-3 w-full lg:text-2xl text-[10px] font-medium rounded text-[#3674D9]">
                <TbShoppingBagDiscount className="text-[14px] lg:text-xl"/>
                <span>Discount</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#E7E9F6] py-1.5 lg:px-3 w-full lg:text-2xl text-[10px] font-medium rounded text-[#3674D9]">
                <GiPayMoney className="text-[14px] lg:text-xl"/>
                <span>Pay Now</span>
            </button>
        </div>
    )
}

export default CartBottom