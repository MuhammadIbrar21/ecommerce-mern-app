import { Link } from 'react-router-dom'
import FilterByCat from "../Filter/FilterByCat"
import FilterByPrice from "../Filter/FilterByPrice"
import FilterByRating from '../Filter/FilterByRating'
import RequiredAuth from '../RequiredAuth/RequiredAuth'
import { useSelector } from 'react-redux'

const Jacket = () => {

    let allProducts = useSelector((store) => {
        return store.products.products
    })

    let Products = allProducts.filter((product) => product.category === 'jacket')

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
                                <Link to="/jacket" className="block font-semibold transition hover:text-gray-700"> Jacket </Link>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="self-end my-4 font-bold text-[#393d46] text-3xl">Product List</div>
                <div className='w-full flex justify-center items-start gap-4'>
                    <div className='w-[20%] flex justify-start items-start flex-col'>

                        <FilterByCat />
                        <FilterByPrice />
                        <FilterByRating />

                    </div>
                    <div className='w-[80%] mb-4'>
                        <div className='font-semibold mb-4 text-sm flex justify-between'>
                            <div className='text-gray-400 '>
                                Viewing <span className='text-[#393d46]'>20</span> of <span className='text-[#393d46]'>160 product</span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='text-gray-400 text-sm font-normal'>Sort by:</span>
                                <div class="relative">
                                    <details class="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary
                                            class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                                        >
                                            <span class="text-sm font-medium">Availability</span>

                                            <span class="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="h-4 w-4"
                                                >
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div class="z-50 group-open:absolute group-open:end-0 group-open:top-auto group-open:mt-2">
                                            <div class="w-96 rounded border border-gray-200 bg-white">
                                                <header class="flex items-center justify-between p-4">
                                                    <span class="text-sm text-gray-700"> 0 Selected </span>

                                                    <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                                                        Reset
                                                    </button>
                                                </header>

                                                <ul class="space-y-1 border-t border-gray-200 p-4">
                                                    <li>
                                                        <label for="FilterInStock" class="inline-flex items-center gap-2">
                                                            <input type="checkbox" id="FilterInStock" class="size-5 rounded border-gray-300" />

                                                            <span class="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                                        </label>
                                                    </li>

                                                    <li>
                                                        <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                                                            <input type="checkbox" id="FilterPreOrder" class="size-5 rounded border-gray-300" />

                                                            <span class="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                                        </label>
                                                    </li>

                                                    <li>
                                                        <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                id="FilterOutOfStock"
                                                                class="size-5 rounded border-gray-300"
                                                            />

                                                            <span class="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </details>
                                </div>

                            </div>
                        </div>
                        <div className='w-full flex justify-start items-center flex-wrap gap-y-4'>
                            {
                                Products.map((product, ind) => (
                                    <Link to={`/product/${product._id}`} key={ind} className='w-[20%] h-[305px] group flex flex-col justify-start items-center hover:shadow'>
                                        <img className='w-[90%]' src={`/${product.category}-${product.name}${product.images}`} alt={product.name} />
                                        <div className='w-[90%] text-sm text-center font-semibold pt-2 group-hover:underline'>{product.name}</div>
                                        <div className='text-gray-500 py-2 text-sm'>Rs.{(product.price).toLocaleString()}</div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default () => {
    return <RequiredAuth>
        <Jacket />
    </RequiredAuth>
}
