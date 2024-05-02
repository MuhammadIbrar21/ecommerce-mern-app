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
              <Route path='/product/:name' element={<ProductDetails />} />
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/products' element={<AllProducts />} />
              <Route path='/cart' element={<Cart />} />
            </>
            }
            {
              role === 'admin' && <>
                <Route path='/' element={<AdminHome />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
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
