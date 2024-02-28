// @ts-nocheck
"use client"
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import ProductList from "./ProductList";
import { useState } from "react";
import { searchProducts } from "@/utils/search";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import CartTop from "./CartTop";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import CartBottom from "./CartBottom";

const ProductSection = ({ products }) => {

    const cartItems = useSelector((state) => state.cart.items);
    const [searchResult, setSearchResult] = useState([])
    const [searchTxt, setSearchTxt] = useState(null)
    const [open, setOpen] = useState(false)

    const search = (query) => {
        setSearchResult(searchProducts(query, setSearchTxt, products))
    }

    return (
        <div>
            <div className="flex items-center gap-3 py-3 shadow-xl px-4 border">
                <IoSearch className="text-2xl text-slate-500 " />
                <input onChange={(e) => search(e.target.value)} type="text" placeholder="Search Products" className="w-full border-0 focus:border-0 focus:outline-none focus:ring-0 text-slate-500 " />
            </div>
            <div className="py-3 px-4 border-x-2 border-b-2 bg-[#F4F6F8]">
                <div className="mb-3 flex flex-wrap gap-1 justify-start items-center">
                    <button className="px-1 lg:px-3 py-0.5 lg:py-1.5 rounded text-xs lg:text-base font-medium border-2 border-[#3674D9] text-[#3674D9]">All Categories</button>
                    <button className="px-1 lg:px-3 py-0.5 lg:py-1.5 rounded text-xs lg:text-base font-medium border-2 border-slate-500 text-slate-500 ">Electronics</button>
                    <button className="px-1 lg:px-3 py-0.5 lg:py-1.5 rounded text-xs lg:text-base font-medium border-2 border-slate-500 text-slate-500 ">Home & Lifestyle</button>
                    <button className="px-1 lg:px-3 py-0.5 lg:py-1.5 rounded text-xs lg:text-base font-medium border-2 border-slate-500 text-slate-500 ">Men Fashion</button>
                    <button className="px-1 lg:px-3 py-0.5 lg:py-1.5 rounded text-xs lg:text-base font-medium border-2 border-slate-500 text-slate-500 ">Women Fashion</button>
                    <BsThreeDotsVertical className="text-2xl text-slate-500" />
                </div>
                <div className="my-1">
                    {searchTxt && <p className="text-slate-500"><span className="text-lg font-semibold text-[#3674D9]">{`"${searchResult?.length}"`}</span> results found</p>}
                </div>
                <ProductList products={products} searchResult={searchResult} searchTxt={searchTxt} />
            </div>
            <div className={`w-full lg:hidden flex flex-col justify-between overflow-y-auto fixed top-0 bottom-0 ${open ? "right-0" : "-right-[460px]"} max-w-[360px] px-4 duration-500 z-50 bg-white`}>
                <div className={`bg-white py-4 sticky top-0 h-max z-10`}>
                    <CartTop setOpen={setOpen} open={open} />
                </div>
                <div className="h-full w-full">
                    <CartList open={open} />
                </div>
                <div className={`bg-white sticky bottom-0 h-max`}>
                    <CartTotal />
                    <CartBottom />
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className="lg:hidden fixed bottom-5 right-5 w-16 h-16 flex justify-center items-center rounded-full z-[2] bg-[#3674D9]">
                <button><MdShoppingCart className="text-4xl" /></button>
                {cartItems.length > 0 && <div className="absolute -top-2 -left-1 w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
                    <p className="text-xs">{cartItems.length}</p>
                </div>}
            </div>
            <div onClick={() => setOpen(!open)} className={`fixed lg:hidden top-0 w-full h-full z-10 bg-black bg-opacity-70 ${open ? "left-0" : "left-[100%]"} duration-300 `}></div>
        </div>
    )
}

export default ProductSection