import { FaStar } from "react-icons/fa6"

const FilterByRating = () => {
    return (
        <div className="w-full">
            <div className='text-[#393d46] font-semibold mb-4 mt-8'>Filter by Rating</div>
            <div className='w-full h-[0.5px] bg-gray-300 mb-4'></div>
            <nav className="w-full">
                <ul>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="flex justify-center items-center text-sm text-yellow-500">
                                <FaStar />
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="flex justify-center items-center text-sm gap-2 text-yellow-500">
                                <FaStar />
                                <FaStar />
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="flex justify-center items-center text-sm gap-2 text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="flex justify-center items-center text-sm gap-2 text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="flex justify-center items-center text-sm gap-2 text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        </label>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default FilterByRating
