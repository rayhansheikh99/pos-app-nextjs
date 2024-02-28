// @ts-nocheck
import { calculateTotalQuantity } from '@/utils/qtyTotal';
import { calculateSubtotal } from '@/utils/subTotal';
import React from 'react'
import { useSelector } from 'react-redux';

const CartTotal = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = parseFloat(calculateSubtotal(cartItems).toFixed(2));
    const totalQuantity = calculateTotalQuantity(cartItems);

    const tax = parseFloat(((10 / 100) * subtotal).toFixed(2))
    const shipping = subtotal ? 5.50.toFixed(2) : 0
    const discount = subtotal ? 10.00.toFixed(2) : 0
    const total = ((subtotal + tax + parseFloat(shipping)) - parseFloat(discount)).toFixed(2)

    return (
        <>
            <div className="sm:w-[350px] w-[250px] float-right lg:mt-10">
                <div className="flex items-center justify-between py-1 lg:py-2 gap-1 border-t-2">
                    <p className="text-slate-500 text-sm font-semibold">Sub Total</p>
                    <p className="font-semibold">${subtotal}</p>
                </div>
                <div className="flex items-center justify-between py-1 lg:py-2 gap-1 border-y">
                    <p className="text-slate-500 text-sm font-semibold">TAX</p>
                    <p className="font-semibold">${tax}</p>
                </div>
                <div className="flex items-center justify-between py-1 lg:py-2 gap-1 border-t">
                    <p className="text-slate-500 text-sm font-semibold">Shipping</p>
                    <p className="font-semibold">${shipping}</p>
                </div>
                <div className="flex items-center justify-between py-1 lg:py-2 gap-1 border-t">
                    <p className="text-[#3674D9] text-sm font-semibold">Discount on Cart</p>
                    <p className="font-semibold">${discount}</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full bg-[#E7E9F6] px-4 rounded">
                <p className="lg:text-sm text-xs w-full text-[#3674D9]">Products Count ({totalQuantity})</p>
                <div className="flex items-center justify-between py-2 gap-1 border-y w-[350px]">
                    <p className="text-[#3674D9] lg:text-2xl font-semibold">Total</p>
                    <p className="text-[#3674D9] lg:text-2xl font-semibold">${total}</p>
                </div>
            </div>
        </>
    )
}

export default CartTotal