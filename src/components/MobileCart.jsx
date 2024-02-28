"use client"
import { decrementQty, incrementQty, removeFromCart } from '@/lib/slices/cartSlice'
import React from 'react'
import { FaMinusCircle, FaPlusCircle, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'

const MobileCart = ({ cartItems }) => {
    const dispatch = useDispatch();
    function handleRemoveCartItem(cartId) {
        dispatch(removeFromCart(cartId));
    }
    return (
        <div className='lg:hidden'>
            {
                cartItems?.map((item, id) => {
                    return <div key={id} className='border p-2 mt-1'>
                        <div className='flex flex-col'>
                            <div className='flex justify-between gap-x-3'>
                                <p className="text-slate-500 text-xs">{item.title}</p>
                                <div className='flex gap-2 items-center'>
                                    <button onClick={() => dispatch(decrementQty(item?.id))}><FaMinusCircle className="text-lg text-slate-500" /></button>
                                    <p className="text-slate-500">{item?.qty}</p>
                                    <button onClick={() => dispatch(incrementQty(item?.id))}><FaPlusCircle className="text-lg text-slate-500" /></button>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-x-3'>
                                <p className="text-slate-500">${item?.price}</p>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <p className="text-slate-500">${(item?.price * item?.qty).toFixed(2)}</p>
                                        <button><FaRegEdit className="text-lg text-slate-500" /></button>
                                        <button onClick={() => handleRemoveCartItem(item.id)}><RiDeleteBin5Line className="text-lg text-red-500" /></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MobileCart