import React from 'react'
import { FaRegCreditCard } from 'react-icons/fa6'
import { GiShatteredGlass } from 'react-icons/gi'
import { IoHeadsetOutline } from 'react-icons/io5'
import { LuTruck } from 'react-icons/lu'

const WhyChooseUs = () => {
    return (
        <div className='my-12'>
            <div className='text-3xl font-bold text-[#393d46] text-center'>Why Choose Us</div>
            <div className='bg-gray-100 my-6 h-[300px] flex justify-center items-center'>
                <div className='w-[25%] h-[90%] flex justify-center items-center flex-col'>
                    <div className='w-[30%] h-[7.5vw] rounded-full border-gray-400 border-[2px] my-4 flex justify-center items-center'>
                        <LuTruck size={50} className='text-[#393d46]' />
                    </div>
                    <div className='text-xl font-bold'>Free Delivery</div>
                    <div className='max-w-[40%] text-sm text-gray-400 text-center'>This free shipping only for selected region</div>
                </div>
                <div className='w-[25%] h-[90%] flex justify-center items-center flex-col'>
                    <div className='w-[30%] h-[7.5vw] rounded-full border-gray-400 border-[2px] my-4 flex justify-center items-center'>
                        <FaRegCreditCard size={50} className='text-[#393d46]' />
                    </div>
                    <div className='text-xl font-bold'>Payment Method</div>
                    <div className='max-w-[40%] text-sm text-gray-400 text-center'>This free shipping only for selected region</div>
                </div>
                <div className='w-[25%] h-[90%] flex justify-center items-center flex-col'>
                    <div className='w-[30%] h-[7.5vw] rounded-full border-gray-400 border-[2px] my-4 flex justify-center items-center'>
                        <GiShatteredGlass size={50} className='text-[#393d46]' />
                    </div>
                    <div className='text-xl font-bold'>Warrenty</div>
                    <div className='max-w-[40%] text-sm text-gray-400 text-center'>This free shipping only for selected region</div>
                </div>
                <div className='w-[25%] h-[90%] flex justify-center items-center flex-col'>
                    <div className='w-[30%] h-[7.5vw] rounded-full border-gray-400 border-[2px] my-4 flex justify-center items-center'>
                        <IoHeadsetOutline size={50} className='text-[#393d46]' />
                    </div>
                    <div className='text-xl font-bold'>Customer Support</div>
                    <div className='max-w-[40%] text-sm text-gray-400 text-center'>This free shipping only for selected region</div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
