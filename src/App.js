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
import { RequiredAuth } from './components/RequiredAuth/RequiredAuth';
import AllProducts from './components/AllProducts/AllProducts';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLogin } from './store/slices/usersSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.post('/auth/session', {
      token: localStorage.getItem('token')
    })
      .then((res) => {
        if (res.data) {
          dispatch(setLogin(res.data))
        }
      })
  }, [])


  return (
    <div id='body'>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product/:name' element={<ProductDetails />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/cart' element={<Cart />} />
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
