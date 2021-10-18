
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
          <Route path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/booking/:serviceId'>
              <Booking></Booking>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>  
          <Footer></Footer>    
        </BrowserRouter>  
      </AuthProvider>
    </div>
  );
}

export default App;
