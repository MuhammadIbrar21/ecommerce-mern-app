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

function App() {
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
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
