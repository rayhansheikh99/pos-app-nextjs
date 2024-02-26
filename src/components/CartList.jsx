// @ts-nocheck
"use client";
import { FaHandRock, FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { calculateSubtotal } from "@/utils/subTotal";
import { decrementQty, incrementQty, removeFromCart } from "@/lib/slices/cartSlice";
import { calculateTotalQuantity } from "@/utils/qtyTotal";

const CartList = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = parseFloat(calculateSubtotal(cartItems).toFixed(2));
    const totalQuantity = calculateTotalQuantity(cartItems);

    const tax = parseFloat(((10 / 100) * subtotal).toFixed(2))
    const shipping = subtotal ? 5.50.toFixed(2) : 0
    const discount = subtotal ? 10.00.toFixed(2) : 0
    const total = ((subtotal + tax + parseFloat(shipping)) - parseFloat(discount)).toFixed(2)
    
    const dispatch = useDispatch();
    function handleRemoveCartItem(cartId) {
        dispatch(removeFromCart(cartId));
    }

    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="w-full">
                    <tbody>
                        {
                            cartItems?.map((item, id) => {
                                return <tr key={id} className="text-slate-500">
                                    <td className="text-slate-500 py-3 w-10"><button><FaRegEdit className="text-2xl text-slate-500" /></button></td>
                                    <td className="text-slate-500 font-semibold border border-r-0 px-4 py-3 truncate max-w-60">{item.title}</td>
                                    <td className="text-slate-500 font-semibold border-y px-4 py-3">${item?.price}</td>
                                    <td className="text-slate-500 font-semibold border-y px-4 py-3 w-5 text-right "><button onClick={() => dispatch(decrementQty(item?.id))}><FaMinusCircle className="text-2xl text-slate-500 font-semibold" /></button></td>
                                    <td className="border-y px-4 py-3 w-3 text-slate-500 font-semibold">{item?.qty}</td>
                                    <td className="border-y px-4 py-3 w-5 text-slate-500 font-semibold"><button onClick={() => dispatch(incrementQty(item?.id))}><FaPlusCircle className="text-2xl text-slate-500 font-semibold" /></button></td>
                                    <td className="border border-l-0 px-4 py-3 text-right w-10 text-slate-500 font-semibold">${(item?.price * item?.qty).toFixed(2)}</td>
                                    <td className="py-3 w-8 text-slate-500 text-right"><button onClick={() => handleRemoveCartItem(item.id)}><RiDeleteBin5Line className="text-2xl text-red-500" /></button></td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
            <div className="w-[350px] float-right mt-10">
                <div className="flex items-center justify-between py-2 gap-1 border-t-2">
                    <p className="text-slate-500 text-sm font-semibold">Sub Total</p>
                    <p className="font-semibold">${subtotal}</p>
                </div>
                <div className="flex items-center justify-between py-2 gap-1 border-y">
                    <p className="text-slate-500 text-sm font-semibold">TAX</p>
                    <p className="font-semibold">${tax}</p>
                </div>
                <div className="flex items-center justify-between py-2 gap-1 border-t">
                    <p className="text-slate-500 text-sm font-semibold">Shipping</p>
                    <p className="font-semibold">${shipping}</p>
                </div>
                <div className="flex items-center justify-between py-2 gap-1 border-t">
                    <p className="text-[#3674D9] text-sm font-semibold">Discount on Cart</p>
                    <p className="font-semibold">${discount}</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full bg-[#E7E9F6] px-4 rounded">
                <p className="text-sm text-[#3674D9]">Products Count ({totalQuantity})</p>
                <div className="flex items-center justify-between py-2 gap-1 border-y w-[350px]">
                    <p className="text-[#3674D9] text-2xl font-semibold">Total</p>
                    <p className="text-[#3674D9] text-2xl font-semibold">${total}</p>
                </div>
            </div>
            <div className="flex justify-between items-center gap-3 mt-6">
                <div className="flex items-center gap-2 bg-[#FADEDD] py-1.5 px-3 text-2xl font-medium rounded text-[#E55C57]">
                    <IoCloseCircleOutline />
                    <p>Cancel</p>
                </div>
                <div className="flex items-center gap-2 bg-[#E7E9F6] py-1.5 px-3 text-2xl font-medium rounded text-[#3674D9]">
                    <FaHandRock />
                    <p>Hold</p>
                </div>
                <div className="flex items-center gap-2 bg-[#E7E9F6] py-1.5 px-3 text-2xl font-medium rounded text-[#3674D9]">
                    <TbShoppingBagDiscount />
                    <p>Discount</p>
                </div>
                <div className="flex items-center gap-2 bg-[#E7E9F6] py-1.5 px-3 text-2xl font-medium rounded text-[#3674D9]">
                    <GiPayMoney />
                    <p>Pay Now</p>
                </div>
            </div>
        </div>
    )
}

export default CartList