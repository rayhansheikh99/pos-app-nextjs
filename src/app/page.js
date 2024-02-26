
import { HiMiniBars3 } from "react-icons/hi2";
import { RiEditBoxLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { PiPlusCircle, PiPlusCircleFill } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiStopwatch } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";
import { getData } from "@/lib/getData";
import ProductList from "@/components/ProductList";
import CartList from "@/components/CartList";

export default async function Home() {
  const products = (await getData("https://fakestoreapi.com/products")) ?? [];
  return (

    <main className="max-w-[1800px] mx-auto min-h-screen py-20">
      <div className='grid grid-cols-2 gap-x-5'>
        <div className='w-full h-full'>
          <div className="flex justify-between items-center gap-x-2">
            <HiMiniBars3 className="text-3xl ml-4" />
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <RiEditBoxLine className="text-xl" />
              <p className="font-medium">Note</p>
            </div>
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <MdOutlineLocalShipping className="text-xl" />
              <p>Shipping</p>
            </div>
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <GiStopwatch className="text-xl" />
              <p>Hold Orders</p>
            </div>
            <div className="bg-[#E7E9F6] text-[#7985CF] flex items-center gap-3 px-2.5 py-2 rounded">
              <PiPlusCircleFill className="text-xl" />
              <p>New Item</p>
            </div>
          </div>
          {/* user  */}
          <div className="bg-[#E7E9F6] flex items-center justify-between px-4 py-2 my-4 rounded">
            <div className="flex items-center gap-x-5">
              <PiUserCircleFill className="text-3xl text-[#7985CF]" />
              <p className="text-[#7985CF] font-semibold">Steve Jobs</p>
            </div>
            <PiPlusCircle className="text-3xl text-[#7985CF]" />
          </div>
          {/* cart list */}
          <CartList />
        </div>
        <div className='w-full h-full'>
          <div className="flex items-center gap-3 py-3 shadow-xl px-4 border">
            <IoSearch className="text-2xl text-slate-500 " />
            <input type="text" placeholder="Search Products" className="w-full border-0 focus:border-0 focus:outline-none focus:ring-0 text-slate-500 " />
          </div>
          <div className="py-3 px-4 border-x-2 border-b-2 bg-[#F4F6F8]">
            <div className="mb-3 flex justify-between items-center">
              <button className="px-3 py-1.5 rounded font-medium border-2 border-[#3674D9] text-[#3674D9]">All Categories</button>
              <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Electronics</button>
              <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Home & Lifestyle</button>
              <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Men Fashion</button>
              <button className="px-3 py-1.5 rounded font-medium border-2 border-slate-500 text-slate-500 ">Women Fashion</button>
              <BsThreeDotsVertical className="text-2xl text-slate-500"/>
            </div>
            <ProductList products={products} />
          </div>

        </div>
      </div>
    </main>


  )
}
