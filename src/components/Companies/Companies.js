import { FaGoogle } from "react-icons/fa6"
import { TiVendorAndroid, TiVendorApple, TiVendorMicrosoft } from "react-icons/ti"

const Companies = () => {
    return (
        <div className="h-[100px] text-gray-500 flex justify-center items-center gap-12">
            <FaGoogle size={50} />
            <TiVendorMicrosoft size={50} />
            <TiVendorApple size={50} />
            <TiVendorAndroid size={50} />
        </div>
    )
}

export default Companies
