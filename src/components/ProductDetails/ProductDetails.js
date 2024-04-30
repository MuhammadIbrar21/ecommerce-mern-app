import { Link, useParams } from "react-router-dom"
import Products from "../../data"
import { useEffect, useState } from "react"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/slices/cartSlice"

const ProductDetails = () => {
    const { name } = useParams()

    const dispatch = useDispatch()

    const [similarProduct, setSimilarProduct] = useState([]);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setSimilarProduct(Products.slice(0, 4));
    }, [])

    const thisProduct = Products.find((product) => product.name === name)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <div className="w-full my-4 flex justify-center items-center gap-8">
                <div>
                    <img className="max-h-[40vw]" src={`/${thisProduct.img}`} />
                </div>
                <div className="h-[89vh] max-w-[35%] relative flex flex-col justify-start items-start">
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
                                <a href="#" className="block transition hover:text-gray-700"> Shirts </a>
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
                                <a href="#" className="block transition hover:text-gray-700"> {thisProduct.name} </a>
                            </li>
                        </ol>
                    </nav>
                    <div className="text-[#393d46] font-bold text-5xl py-2">{thisProduct.name}</div>
                    <div className="text-[#9f9f9f] text-lg py-2 pb-4">Rs.{(thisProduct.price).toLocaleString()}.00</div>
                    <span className="relative w-full flex justify-center">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>
                    </span>
                    <span className="my-4 text-[#9f9f9f]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium a hic commodi. Est alias sunt, illo veritatis consequuntur eaque obcaecati veniam, hic sed beatae quibusdam molestiae earum architecto fugiat!</span>
                    <div>
                        <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                        <div className="flex items-center rounded border border-gray-200">
                            <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={() => setQuantity(quantity - 1)}>
                                &minus;
                            </button>

                            <input
                                type="number"
                                id="Quantity"
                                min={1}
                                value={quantity}
                                className="h-10 w-16 border-transparent focus:outline-blue-600 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />

                            <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <button className="py-4 px-8 my-4 bg-gray-700 text-white flex justify-center items-center gap-x-4 font-bold transition hover:bg-gray-800" onClick={() => handleAddToCart(thisProduct)}>
                        Add to Cart <MdOutlineShoppingCart size={20} />
                    </button>
                </div>
            </div>
            <div className="my-4">
                <div className="flex justify-between w-full">
                    <div className="font-bold text-[#393d46] text-3xl px-12">Similar Product</div>
                    <Link to='/' className="px-12 text-md font-semibold hover:text-purple-500">View all</Link>
                </div>
                <div className="flex justify-between items-center">
                    {
                        similarProduct.map((product, ind) => {
                            return <Link key={ind} to={`/product/${product.name}`} className='group w-[25%] h-[300px] my-4 flex justify-center items-center flex-col hover:border-[1.5px]'>
                                <img className='w-[40%]' src={`/${product.img}`} />
                                <div className='text-gray-800 font-semibold py-2 group-hover:underline'>{product.name}</div>
                                <div className='text-gray-500 text-xs'>Rs.{(product.price).toLocaleString()}.00</div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
