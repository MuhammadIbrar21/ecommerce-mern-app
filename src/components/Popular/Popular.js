import { FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Products from "../../data"

const Popular = () => {
    return (
        <div className="my-8">
            <div className="flex justify-between w-full">
                <div className="font-bold text-[#393d46] text-3xl px-12">Popular This Week</div>
                <Link to='/' className="px-12 text-md font-semibold hover:text-purple-500">View all</Link>
            </div>
            <div className="w-[92%] m-auto my-8 gap-y-4 flex-wrap flex justify-between items-center">
                {
                    Products.map((product, ind) => {
                        return <Link to={`/product/${product.name}`} key={ind} className="w-[32%] h-[200px] flex gap-4 group hover:shadow">
                            <img className="w-[40%]" src={`/${product.img}`} alt="" />
                            <div className="flex justify-center items-left flex-col">
                                <div className="text-gray-900 text-lg font-semibold group-hover:underline">{product.name}</div>
                                <div className="text-gray-400 font-semibold">Rs.{(product.price).toLocaleString()}</div>
                                <div className="flex text-yellow-500 pt-4">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className="text-gray-300" />
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Popular
