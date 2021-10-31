import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nopage from './Components/Nopage/Nopage';
import AddService from './Components/AddService/AddService';
import Services from './Components/Services/Services';
import Booking from './Components/Booking/Booking';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Login/Login';
import AuthProvider from './contex/AuthProvider';
import AllOrder from './Components/AllOrders/AllOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageAlls from './Components/ManageAlls/ManageAlls';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>


            <Route path="/home">
              <Home></Home>
            </Route>



            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/allorder">
              <AllOrder></AllOrder>
            </Route>


            <Route path="/manageAll">
              <ManageAlls></ManageAlls>
            </Route>

            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>


            <PrivateRoute path="/booking/:userId">
              <Booking></Booking>
            </PrivateRoute>



            <Route path="*">
              <Nopage></Nopage>
            </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
