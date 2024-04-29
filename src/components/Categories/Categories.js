import { IoBagHandleOutline, IoShirtOutline } from "react-icons/io5"
import { PiDress, PiPantsLight } from "react-icons/pi"
import { TbJacket, TbShoe } from "react-icons/tb"
import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <div className="my-4">
            <div className="flex justify-between w-full">
                <div className="font-bold text-[#393d46] text-3xl px-12">Categories</div>
                <Link to='/categories' className="px-12 text-md font-semibold hover:text-purple-500">View all</Link>
            </div>
            <div className="w-full flex justify-around my-8 items-center">
                <Link to='/' className="w-44 h-44 bg-gray-100 flex justify-center items-center flex-col group hover:bg-gray-700 hover:text-white">
                    <TbJacket size={52} />
                    <div className="text-xs mt-4">Jacket</div>
                </Link>
                <Link to='/' className="w-44 h-44 bg-gray-100 flex justify-center items-center flex-col group hover:bg-gray-700 hover:text-white">
                    <IoShirtOutline size={52} />
                    <div className="text-xs mt-4">Shirt</div>
                </Link>
                <Link to='/' className="w-44 h-44 bg-gray-100 flex justify-center items-center flex-col group hover:bg-gray-700 hover:text-white">
                    <PiPantsLight size={52} />
                    <div className="text-xs mt-4">Pants</div>
                </Link>
                <Link to='/' className="w-44 h-44 bg-gray-100 flex justify-center items-center flex-col group hover:bg-gray-700 hover:text-white">
                    <TbShoe size={52} />
                    <div className="text-xs mt-4">Shoes</div>
                </Link>
                <Link to='/' className="w-44 h-44 bg-gray-100 flex justify-center items-center flex-col group hover:bg-gray-700 hover:text-white">
                    <PiDress size={52} />
                    <div className="text-xs mt-4">Dress</div>
                </Link>
                <Link to='/' className="w-44 h-44 bg-gray-100 flex justify-center items-center flex-col group hover:bg-gray-700 hover:text-white">
                    <IoBagHandleOutline size={52} />
                    <div className="text-xs mt-4">Accesories</div>
                </Link>
            </div>
        </div>
    )
}

export default Categories
