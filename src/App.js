import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { calcQuantities, getCartData, updateCartData } from './ReduxTk/slices/cartSlice';
import RegisterForm from './pages/Register/RegisterForm';
import Home from './pages/Home/Home'
import MyNavbar from './components/MyNavbar/MyNavbar'
import LoginForm from './pages/Login/LoginForm';
import NotFound from './pages/NotFound';
import MenuePage from './pages/MenuePage/MenuePage';
import ViewProduct from './pages/ViewProduct/ViewProduct';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import IsLoggedin from './components/IsLoggedin';
import Cart from './pages/cart/Cart';
import './App.css'
import './index.css'




function App() {

  const isAuth = useSelector(state => state.authReducer.isAuth);
  const userId = useSelector(state => state.authReducer.userId);
  const cart = useSelector(state => state.cartReducer.cart);
  const dispatch = useDispatch();

  console.log(cart);

  useEffect(() => {
    if(isAuth){
      dispatch(getCartData(userId));
    }
  }, [dispatch, isAuth, userId]);


  useEffect(() => {
    dispatch(updateCartData({id: userId, cart}))
    dispatch(calcQuantities())
  }, [cart, dispatch, userId])


  return (
    <div className="App ">
      <div className='app-layer'>
        <MyNavbar />

        <Routes>
          <Route path='/register' element={<IsLoggedin type="notIsAuth"><RegisterForm /></IsLoggedin>} />
          <Route path='/login' element={<IsLoggedin type="notIsAuth"><LoginForm /></IsLoggedin>} />

          <Route path='/' element={<IsLoggedin type="isAuth">
            <Home />
          </IsLoggedin>} />
          {/* <Route path='/orders' element={<IsLoggedin type="isAuth">
            <OrderList />
          </IsLoggedin>} /> */}
          <Route path='/contact' element={<IsLoggedin type="isAuth">
            <ContactUs />
          </IsLoggedin>} />

          <Route path='/menue' element={<IsLoggedin type="isAuth">
            <MenuePage />
          </IsLoggedin>} />
          <Route path='/products/:id' element={<IsLoggedin type="isAuth">
            <ViewProduct />
          </IsLoggedin>} />
          <Route path='/cart' element={<IsLoggedin type="isAuth">
            <Cart />
          </IsLoggedin>} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
