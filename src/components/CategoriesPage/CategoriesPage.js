import { Link } from "react-router-dom"
import { IoBagHandleOutline, IoShirtOutline } from "react-icons/io5"
import { PiDress, PiPantsLight } from "react-icons/pi"
import { TbJacket, TbShoe } from "react-icons/tb"

const CategoriesPage = () => {
    return (
        <div>
            <div className="flex justify-center items-start mx-8 flex-col">
                <div className="my-4">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center gap-1 text-sm text-gray-600">
                            <li>
                                <Link to="/" className="block transition hover:text-gray-700">
                                    <span className="sr-only"> Home </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>

                            <li>
                                <a href="#" className="block font-semibold transition hover:text-gray-700"> Categories </a>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="self-end my-4 font-bold text-[#393d46] text-3xl">Categories</div>

                <div className="w-full flex flex-wrap justify-around gap-y-6 my-8 items-center">

                    <Link to='/' className="w-[48%] h-44 gap-4 bg-gray-100 flex justify-center items-center group hover:bg-gray-700 hover:text-white">
                        <TbJacket size={90} />
                        <div className="flex justify-center items-start flex-col">
                            <div className="text-2xl font-bold text-[#393d46] mt-4 group-hover:text-white">Jacket</div>
                            <div className="text-2xl text-gray-400 group-hover:text-white">Collection</div>
                        </div>
                    </Link>

                    <Link to='/' className="w-[48%] h-44 gap-4 bg-gray-100 flex justify-center items-center group hover:bg-gray-700 hover:text-white">
                        <IoShirtOutline size={90} />
                        <div className="flex justify-center items-start flex-col">
                            <div className="text-2xl font-bold text-[#393d46] mt-4 group-hover:text-white">Shirt</div>
                            <div className="text-2xl text-gray-400 group-hover:text-white">Collection</div>
                        </div>
                    </Link>

                    <Link to='/' className="w-[48%] h-44 gap-4 bg-gray-100 flex justify-center items-center group hover:bg-gray-700 hover:text-white">
                        <PiPantsLight size={90} />
                        <div className="flex justify-center items-start flex-col">
                            <div className="text-2xl font-bold text-[#393d46] mt-4 group-hover:text-white">Pants</div>
                            <div className="text-2xl text-gray-400 group-hover:text-white">Collection</div>
                        </div>
                    </Link>

                    <Link to='/' className="w-[48%] h-44 gap-4 bg-gray-100 flex justify-center items-center group hover:bg-gray-700 hover:text-white">
                        <TbShoe size={90} />
                        <div className="flex justify-center items-start flex-col">
                            <div className="text-2xl font-bold text-[#393d46] mt-4 group-hover:text-white">Shoes</div>
                            <div className="text-2xl text-gray-400 group-hover:text-white">Collection</div>
                        </div>
                    </Link>

                    <Link to='/' className="w-[48%] h-44 gap-4 bg-gray-100 flex justify-center items-center group hover:bg-gray-700 hover:text-white">
                        <PiDress size={90} />
                        <div className="flex justify-center items-start flex-col">
                            <div className="text-2xl font-bold text-[#393d46] mt-4 group-hover:text-white">Dress</div>
                            <div className="text-2xl text-gray-400 group-hover:text-white">Collection</div>
                        </div>
                    </Link>

                    <Link to='/' className="w-[48%] h-44 gap-4 bg-gray-100 flex justify-center items-center group hover:bg-gray-700 hover:text-white">
                        <IoBagHandleOutline size={90} />
                        <div className="flex justify-center items-start flex-col">
                            <div className="text-2xl font-bold text-[#393d46] mt-4 group-hover:text-white">Accesories</div>
                            <div className="text-2xl text-gray-400 group-hover:text-white">Collection</div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CategoriesPage
