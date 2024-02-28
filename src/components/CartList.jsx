// @ts-nocheck
"use client";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "@/lib/slices/cartSlice";
import CartBottom from "./CartBottom";
import CartTotal from "./CartTotal";
import MobileCart from "./MobileCart";

const CartList = ({ open }) => {

    const cartItems = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();
    function handleRemoveCartItem(cartId) {
        dispatch(removeFromCart(cartId));
    }

    return (
        <div className="relative h-full">
            {(cartItems && cartItems.length) > 0 ?
                <>
                    <div className="overflow-x-auto lg:mt-5 hidden lg:block">
                        <table className="w-full ">
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
                    <MobileCart cartItems={cartItems} />
                </>
                :
                <div className="py-5">
                    <p className="text-2xl text-slate-500 text-center font-semibold">No product in your cart</p>
                </div>}
            <div className={`hidden lg:block`}>
                <CartTotal />
                <CartBottom />
            </div>
        </div>
    )
}

export default CartList