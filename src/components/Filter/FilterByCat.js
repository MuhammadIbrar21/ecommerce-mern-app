import { IoBagHandleOutline, IoShirtOutline } from "react-icons/io5"
import { PiDress, PiPantsLight } from "react-icons/pi"
import { TbJacket, TbShoe } from "react-icons/tb"
import { Link } from "react-router-dom"


const FilterByCat = () => {
    return (
        <div className="w-full">
            <div className='text-[#393d46] font-semibold mb-4'>Categories</div>
            <div className='w-full h-[0.5px] bg-gray-300 mb-4'></div>
            <nav className="w-full">
                <ul>
                    <li >
                        <Link to='/jacket' className="w-full flex justify-start items-center gap-2 h-[3vw] text-gray-400 transition hover:text-[#393d46]"><TbJacket />Jacket</Link>
                    </li>
                    <li >
                        <Link to='/shirt' className="w-full flex justify-start items-center gap-2 h-[3vw] text-gray-400 transition hover:text-[#393d46]"><IoShirtOutline />Shirt</Link>
                    </li>
                    <li >
                        <Link to='/pant' className="w-full flex justify-start items-center gap-2 h-[3vw] text-gray-400 transition hover:text-[#393d46]"><PiPantsLight />Pants</Link>
                    </li>
                    <li >
                        <Link to='/shoes' className="w-full flex justify-start items-center gap-2 h-[3vw] text-gray-400 transition hover:text-[#393d46]"><TbShoe />Shoes</Link>
                    </li>
                    <li >
                        <Link to='/dress' className="w-full flex justify-start items-center gap-2 h-[3vw] text-gray-400 transition hover:text-[#393d46]"><PiDress />Dress</Link>
                    </li>
                    <li >
                        <Link className="w-full flex justify-start items-center gap-2 h-[3vw] text-gray-400 transition hover:text-[#393d46]"><IoBagHandleOutline />Accesories</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default FilterByCat
