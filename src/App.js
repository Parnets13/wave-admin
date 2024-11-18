import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/AppSidebar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Categories from './components/Categories';
import SubCategories from './components/SubCategories';
import Service from './components/Service';
import Booking from './components/Booking';
import User from './components/User';
import ServiceProvider from './components/ServiceProvider';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import AppliedProvider from './components/AppliedProvider';
import AppliedProviderDetails from './components/AppliedProviderDetails';
import Sales from './components/Sales';
import RefundRequest from './components/RefundRequest';
import Cod from './components/Cod';
import Revenue from './components/Revenue';
import RegisterReport from './components/RegisterReport';
import ServiceProviderDetails from './components/ServiceProviderDetails';
import whatsapp from "./assets/icons8-whatsapp-480.png"


function App() {
  return (
  <BrowserRouter>
   <a href="https://web.whatsapp.com/"><img src={whatsapp} alt="" className=' bottom-4 right-0 w-10 fixed' /></a>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<><Header/><Dashboard/></>}/>
        <Route path='/categories' element={<><Header/><Categories/></>}/>
        <Route path='/sub_categories' element={<><Header/><SubCategories/></>}/>
        <Route path='/service' element={<><Header/><Service/></>}/>
        <Route path='/booking' element={<><Header/><Booking/></>}/>
        <Route path='/user' element={<><Header/><User/></>}/>
        <Route path='/verified_provider' element={<><Header/><ServiceProvider/></>}/>
        <Route path='/applied_provider' element={<><Header/><AppliedProvider/></>}/>
        <Route path='/applied_provider_details' element={<><Header/><AppliedProviderDetails/></>}/>
        <Route path='/offer' element={<><Header/><Offers/></>}/>
        <Route path='/reviews' element={<><Header/><Reviews/></>}/>
        <Route path='/sales' element={<><Header/><Sales/></>}/>
        <Route path='/refund_request' element={<><Header/><RefundRequest/></>}/>
        <Route path='/cod' element={<><Header/><Cod/></>}/>
        <Route path='/revenue' element={<><Header/><Revenue/></>}/>
        <Route path='/register_report' element={<><Header/><RegisterReport/></>}/>
        <Route path='/serviceProviderDetails' element={<><Header/><ServiceProviderDetails/></>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
