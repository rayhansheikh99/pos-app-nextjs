// @ts-nocheck
"use client";
import { addToCart } from "@/lib/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

export default function Product({ product }) {

    const dispatch = useDispatch();
    function handleAddToCart() {
        dispatch(addToCart(product));
      }

    return (
        <div onClick={handleAddToCart} className="rounded bg-white dark:bg-slate-900 overflow-hidden border shadow">
            <div>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={556}
                    height={556}
                    className="w-full h-48 object-cover p-2"
                />
            </div>
            <div className="">
                <div className="flex items-center justify-center py-2 bg-[#F4F6F8] text-slate-500">
                    <p className="text-sm font-semibold">$ {product.price}</p>
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