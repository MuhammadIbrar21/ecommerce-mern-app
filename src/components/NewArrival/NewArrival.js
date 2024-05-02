import { Link } from "react-router-dom"
import RequiredAuth from '../RequiredAuth/RequiredAuth'

const NewArrival = () => {
    return (
        <div className="my-4">
            <div className="flex justify-between w-full">
                <div className="font-bold text-[#393d46] text-3xl px-12">New Arrivals</div>
                <Link to='/products' className="px-12 text-md font-semibold hover:text-purple-500">View all</Link>
            </div>
            <div className="w-full flex justify-center my-8 items-center">
                <div className="w-[45%] h-96 bg-gray-100 flex mx-4 justify-between items-center">
                    <div className="w-3/5 h-full flex justify-center items-center">
                        <div className="w-[90%]">
                            <img className="w-[90%]" src="/blackAbeinto4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-[45%] h-full flex justify-center items-center flex-col">
                        <div className="text-gray-800 font-semibold font-xl">Purple Warm Jacket</div>
                        <div className="text-gray-500 text-sm">Rs.499.99</div>
                        <button className="bg-gray-700 py-1 px-4 font-semibold mt-2 text-white transition focus:outline-none hover:bg-gray-800">Add to Cart</button>
                    </div>
                </div>
                <div className="w-[40%] h-96 flex mx-4 justify-between flex-wrap items-center">
                    <Link className="w-[48%] h-[46%] bg-gray-100 flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <img className="w-[30%]" src="/brooklyn1.jpg" alt="" />
                            <div className="text-gray-800 font-semibold">Blue Grey Warm Jacket</div>
                            <div className="text-gray-500 text-xs">Rs.899.99</div>
                        </div>
                    </Link>
                    <Link className="w-[48%] h-[46%] bg-gray-100 flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <img className="w-[30%]" src="/NEON2.jpg" alt="" />
                            <div className="text-gray-800 font-semibold">Denim Jacket</div>
                            <div className="text-gray-500 text-xs">Rs.899.99</div>
                        </div>
                    </Link>
                    <Link className="w-[48%] h-[46%] bg-gray-100 flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <img className="w-[30%]" src="/abiento-black1.jpg" alt="" />
                            <div className="text-gray-800 font-semibold">Black Jacket</div>
                            <div className="text-gray-500 text-xs">Rs.899.99</div>
                        </div>
                    </Link>
                    <Link className="w-[48%] h-[46%] bg-gray-100 flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <img className="w-[30%]" src="/brooklyn2.jpg" alt="" />
                            <div className="text-gray-800 font-semibold">Green Polar Jacket</div>
                            <div className="text-gray-500 text-xs">Rs.899.99</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default () => {
    return <RequiredAuth>
        <NewArrival />
    </RequiredAuth>
}
