import React from 'react'

const FilterByPrice = () => {
    return (
        <div className='w-full'>
            <div className='text-[#393d46] font-semibold mb-4 mt-8'>Filter by Price</div>
            <div className='w-full h-[0.5px] bg-gray-300 mb-4'></div>
            <nav className="w-full">
                <ul>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="text-sm text-gray-700">
                                All Price
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="text-sm text-gray-700">
                                Rs.100 - Rs.250
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="text-sm text-gray-700">
                                Rs.250 - Rs.500
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="text-sm text-gray-700">
                                Rs.500 - Rs.1000
                            </span>
                        </label>
                    </li>
                    <li className="py-2">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="text-sm text-gray-700">
                                Rs.1000 - Rs.2000
                            </span>
                        </label>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default FilterByPrice
