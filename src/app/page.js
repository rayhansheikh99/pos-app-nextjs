import { getData } from "@/lib/getData";
import CartList from "@/components/CartList";
import ProductSection from "@/components/ProductSection";
import CartTop from "@/components/CartTop";

export default async function Home() {
  const products = (await getData("https://fakestoreapi.com/products")) ?? [];
  return (
    <main className="max-w-[1800px] mx-auto min-h-screen py-5 px-4">
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-5'>
        {/* Cart List */}
        <div className='w-full h-full'>
          <CartTop />
          <CartList />
        </div>
        {/* Product Section  */}
        <div className='w-full h-full'>
          <ProductSection products={products} />
        </div>
      </div>
    </main>


  )
}
