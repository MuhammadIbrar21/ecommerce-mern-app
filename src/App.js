import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import AllProducts from './components/AllProducts/AllProducts';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setLogin, setLogout } from './store/slices/usersSlice';
import AdminHeader from './components/Admin/AdminHeader/AdminHeader';
import Users from './components/Admin/Users/Users'
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminProducts from './components/Admin/AdminProducts/AdminProducts';
import AddProducts from './components/Admin/AddProducts/AddProducts';
import ContactInfo from './components/Admin/ContactInfo/ContactInfo';
import { setProducts } from './store/slices/productsSlice';
import Shirts from './components/Shirts/Shirts';
import Shoes from './components/Shoes/Shoes';
import Dress from './components/Dress/Dress';
import Pants from './components/Pants/Pants';
import Jacket from './components/Jacket/Jacket';

function App() {

  const [role, setRole] = useState('customer');

  const dispatch = useDispatch();

  const loggedUser = useSelector((store) => {
    return store.users.currentUser
  })

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('isChecked')) === true) {
      axios.post('/auth/session', {
        token: localStorage.getItem('token')
      }).then((res) => {
        if (res.data) {
          setRole(res.data.type)
          dispatch(setLogin(res.data))
        }
      })
    } else {
      dispatch(setLogout())
    }

  }, [])

  useEffect(() => {
    if (loggedUser) {
      setRole(loggedUser.type)
    }
  }, [loggedUser])

  useEffect(() => {
    axios.get('/admin/products').then((res) => {
      dispatch(setProducts(res.data))
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div id='body'>
      <BrowserRouter>
        {role === 'customer' && <Header />}
        {role === 'admin' && <AdminHeader />}
        <main>
          <Routes>
            {role === 'customer' && <>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/product/:_id' element={<ProductDetails />} />
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/products' element={<AllProducts />} />
              <Route path='/shirt' element={<Shirts />} />
              <Route path='/shoes' element={<Shoes />} />
              <Route path='/dress' element={<Dress />} />
              <Route path='/pant' element={<Pants />} />
              <Route path='/jacket' element={<Jacket />} />
              <Route path='/cart' element={<Cart />} />
            </>
            }
            {
              role === 'admin' && <>
                <Route path='/' element={<AdminHome />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/allproducts' element={<AdminProducts />} />
                <Route path='/addproducts' element={<AddProducts />} />
                <Route path='/contactinfo' element={<ContactInfo />} />
                <Route path='/users' element={<Users />} />
              </>
            }
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
