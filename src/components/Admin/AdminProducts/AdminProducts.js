import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const AdminProducts = () => {

    let products = useSelector((store) => {
        return store.products.products
    })

    return (
        <div>

            <div class="overflow-x-auto">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                        <tr>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">#</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Photo</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Price</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Stock</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Category</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        {
                            products.map((product, ind) => (
                                <tr key={ind} class="odd:bg-gray-50 group">
                                    <td class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">{ind + 1}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        <img className="size-20 rounded object-cover" src={`/${product.category}-${product.name}${product.images}`} alt={product.name} />
                                    </td>
                                    <td class="whitespace-nowrap font-semibold px-4 py-2 text-left text-gray-700 group-hover:underline"><Link to='/edit'>{product.name}</Link></td>
                                    <td class="whitespace-nowrap px-4 py-2 text-left text-gray-700">Rs.{(product.price).toLocaleString()}.00</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-left text-gray-700">{product.totalQuantity}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-left text-gray-700">{product.category}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminProducts
