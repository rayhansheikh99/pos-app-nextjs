"use client"
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import ProductList from "./ProductList";
import { useState } from "react";

const ProductSection = ({ products }) => {

    const [searchResult, setSearchResult] = useState([])
    const [searchTxt, setSearchTxt] = useState(null)

    const searchProducts = (query) => {
        const searchTerm = query?.toLowerCase().trim();
        setSearchTxt(searchTerm)
        return setSearchResult(products.filter(product =>
            product?.title.toLowerCase().includes(searchTerm)
        ));
    };

    return (
        <div>
            <div className="flex items-center gap-3 py-3 shadow-xl px-4 border">
                <IoSearch className="text-2xl text-slate-500 " />
                <input onChange={(e) => searchProducts(e.target.value)} type="text" placeholder="Search Products" className="w-full border-0 focus:border-0 focus:outline-none focus:ring-0 text-slate-500 " />
            </div>
            <div className="py-3 px-4 border-x-2 border-b-2 bg-[#F4F6F8]">
                <div className="mb-3 flex flex-wrap gap-1 justify-start items-center">
                    <button className="px-3 py-1.5 rounded font-medium border-2 border-[#3674D9] text-[#3674D9]">All Categories</button>
                    <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Electronics</button>
                    <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Home & Lifestyle</button>
                    <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Men Fashion</button>
                    <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Women Fashion</button>
                    <BsThreeDotsVertical className="text-2xl text-slate-500" />
                </div>
                <div className="my-1">
                    {searchTxt && <p className="text-slate-500"><span className="text-lg font-semibold text-[#3674D9]">{`"${searchResult?.length}"`}</span> results found</p>}
                </div>
                <ProductList products={products} searchResult={searchResult} searchTxt={searchTxt}/>
            </div>
        </div>
    )
}

export default ProductSection