import React from 'react'

const SummerCollection = () => {
    return (
        <div>
            <div className='h-[20vw] bg-[#393d46]'>
                <div className='text-white font-bold text-3xl pl-16 pt-4'>Summer Collections</div>
            </div>
            <div className='bg-orange-100 w-[90%] h-[20vw] m-auto mt-[-13vw] flex justify-between items-center border-y-4 border-orange-300'>
                <div className='cursor-pointer w-[32%] h-full bg-green-100 flex justify-center items-center flex-col'>
                    <img className='w-[50%]' src='/draw2.jpg' alt='' />
                    <div className='text-sm text-gray-600 py-2'>Festive Wear By @abrar_786</div>
                    <div className='text-md text-gray-700 font-semibold'>Starting Rs.799</div>
                </div>
                <div className='cursor-pointer w-[32%] h-full bg-green-100 flex justify-center items-center flex-col'>
                    <img className='w-[50%]' src='/draw2.jpg' alt='' />
                    <div className='text-sm text-gray-600 py-2'>Festive Wear By @abrar_786</div>
                    <div className='text-md text-gray-700 font-semibold'>Starting Rs.799</div>
                </div>
                <div className='cursor-pointer w-[32%] h-full bg-green-100 flex justify-center items-center flex-col'>
                    <img className='w-[50%]' src='/draw2.jpg' alt='' />
                    <div className='text-sm text-gray-600 py-2'>Festive Wear By @abrar_786</div>
                    <div className='text-md text-gray-700 font-semibold'>Starting Rs.799</div>
                </div>
            </div>
        </div>
    )
}

export default SummerCollection
