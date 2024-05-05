import axios from "axios";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

const AddProducts = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const saveData = async (data) => {

        let info = new FormData();

        info.append('name', data.name)
        info.append('price', data.price)
        info.append('totalQuantity', data.totalQuantity)
        info.append('category', data.category)

        for (let file of data.images) {
            info.append('images', file)
        }
        // console.log(info);

        let res = await axios.post('/admin/setup-folder', { name: data.name, category: data.category })

        if (res.data.success) {

            axios.post('/admin/add-product', info).then((res => {
                toast.success('Product added successfully')
                reset()
            })).catch((err) => {
                toast.error('Product not Added!')
            })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveData)} className="w-[50%] p-2 bg-gray-100 flex flex-col m-auto my-8 gap-2" >

                <h4 className="text-center font-bold text-2xl py-2">Add Product</h4>

                <input type="text" {...register('name', { required: true })} placeholder="Enter Product Name" className="p-2 border border-solid border-gray-300 rounded focus:outline-blue-700" />
                {errors.name ? <div className='text-red-700'>This field is required!</div> : null}

                <input type="number" {...register('price', { required: true })} placeholder="Enter Product Price" className="p-2 border border-solid border-gray-300 rounded focus:outline-blue-700" />
                {errors.price ? <div className='text-red-700'>This field is required!</div> : null}

                <input type="number" {...register('totalQuantity', { required: true })} placeholder="Enter Product Quantity" className="p-2 border border-solid border-gray-300 rounded focus:outline-blue-700" />
                {errors.totalQuantity ? <div className='text-red-700'>This field is required!</div> : null}

                <input type="text" {...register('category', { required: true })} placeholder="Enter Product Category" className="p-2 border border-solid border-gray-300 rounded focus:outline-blue-700" />
                {errors.category ? <div className='text-red-700'>This field is required!</div> : null}

                <input type='file' {...register('images', { required: true })} placeholder="Enter Product Name" multiple />
                {errors.images ? <div className='text-red-700'>This field is required!</div> : null}

                <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-md tracking-wider">Add Product</button>

            </form>
        </div>
    )
}

export default AddProducts
