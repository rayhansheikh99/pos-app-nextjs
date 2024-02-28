// @ts-nocheck
"use client";
import { addToCart, decrementQty, incrementQty } from "@/lib/slices/cartSlice";
import Image from "next/image";
import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Product({ product }) {

    const cartItems = useSelector((state) => state.cart.items);
    const cartProductIds = cartItems?.map(item => item?.id)
    const isSelected = cartProductIds.includes(parseInt(product.id));
    const borderClass = isSelected ? "border-[#3674D9]" : "";
    const qty = cartItems?.find(item => item?.id === parseInt(product.id));

    const dispatch = useDispatch();
    function handleAddToCart() {
        dispatch(addToCart(product));
        toast("Added to Cart", {
            type: 'success', autoClose: 1000,
        })
    }

    return (
        <div className={`rounded bg-white overflow-hidden ${borderClass} border shadow relative lg:cursor-pointer`}>
            <div className="relative">
                <Image
                    onClick={handleAddToCart}
                    src={product.image}
                    alt={product.title}
                    width={556}
                    height={556}
                    className="w-full h-48 object-cover p-2"
                />
                {isSelected && <div className="absolute bg-black bg-opacity-70 text-white left-0 w-full top-0 h-full flex items-center justify-center gap-3">
                    <button onClick={() => dispatch(decrementQty(product?.id))}><FaMinusCircle className="text-lg  font-semibold" /></button>
                    <p>{qty?.qty}</p>
                    <button onClick={() => dispatch(incrementQty(product?.id))}><FaPlusCircle className="text-lg  font-semibold" /></button>
                </div>}
            </div>
            <div onClick={handleAddToCart} className="">
                <div className="flex items-center justify-center py-2 bg-[#F4F6F8] text-slate-500">
                    <p className="text-sm font-semibold">${product.price}</p>
                </div>
                <div>
                    <h2 className="text-center px-2 text-sm truncate text-slate-500 my-2 font-semibold">
                        {product.title}
                    </h2>
                </div>
            </div>

        </div>
    );
}