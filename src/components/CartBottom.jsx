import { IoCloseCircleOutline } from "react-icons/io5";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { FaHandRock } from "react-icons/fa";

const CartBottom = () => {
    return (
        <div className="flex justify-between items-center gap-3 mt-6">
            <button className="flex items-center gap-2 bg-[#FADEDD] py-1.5 px-3 text-2xl font-medium rounded text-[#E55C57]">
                <IoCloseCircleOutline />
                <span>Cancel</span>
            </button>
            <button className="flex items-center gap-2 bg-[#E7E9F6] py-1.5 px-3 text-2xl font-medium rounded text-[#3674D9]">
                <FaHandRock />
                <span>Hold</span>
            </button>
            <button className="flex items-center gap-2 bg-[#E7E9F6] py-1.5 px-3 text-2xl font-medium rounded text-[#3674D9]">
                <TbShoppingBagDiscount />
                <span>Discount</span>
            </button>
            <button className="flex items-center gap-2 bg-[#E7E9F6] py-1.5 px-3 text-2xl font-medium rounded text-[#3674D9]">
                <GiPayMoney />
                <span>Pay Now</span>
            </button>
        </div>
    )
}

export default CartBottom