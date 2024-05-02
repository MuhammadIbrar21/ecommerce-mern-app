import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default ({ children }) => {

    if (localStorage.getItem('isChecked') === true && !localStorage.getItem('token')) {
        toast.error('Please Login to access this page!', {
            position: 'bottom-right'
        })
        return <Navigate to='/login' />

    } else {
        if (!localStorage.getItem('isChecked') || localStorage.getItem('isChecked') == false) {
            toast.error('Please Login to access this page!', {
                position: 'bottom-right'
            })
            return <Navigate to='/login' />
        } else {
            return <>
                {children}
            </>
        }

    }

}