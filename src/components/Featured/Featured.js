import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../../data.js'

const Featured = () => {
    return (
        <div className="my-4">
            <div className="flex justify-between w-full">
                <div className="font-bold text-[#393d46] text-3xl px-12">Featured</div>
                <Link to='/products' className="px-12 text-md font-semibold hover:text-purple-500">View all</Link>
            </div>
            <div className='w-[92%] flex justify-around flex-wrap gap-y-2 my-4 m-auto'>
                {
                    Products.map((product, ind) => {
                        return <Link key={ind} to={`/product/${product.name}`} className='group w-[30%] h-[300px] flex justify-center items-center flex-col hover:border-[1.5px]'>
                            <img className='w-[40%]' src={`/${product.img}`} />
                            <div className='text-gray-800 font-semibold py-2 group-hover:underline'>{product.name}</div>
                            <div className='text-gray-500 text-xs'>Rs.{(product.price).toLocaleString()}.00</div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Featured
