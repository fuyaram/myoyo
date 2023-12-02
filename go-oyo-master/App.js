import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Home from './Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import Hire from './pages/Hire';
import Chat from './pages/Chat';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
import Footer from './footer/Footer';
import Hotels from './pages/Hotels';
import Resturent from './pages/Resturent'
import Property from './pages/Property'
import Signup from './pages/Signup'
import Login from './pages/Login'
import City from './pages/City'
import Support from './pages/Support'
import Blogs from './pages/Blogs'

function App() {
  
  return (
    <>
   

   <ErrorBoundary>

  <Navbar />
<Routes>
<Route  path='/' element={<Home />}></Route>
<Route  path='/support' element={<Support />}></Route>
<Route  path='/blogs' element={<Blogs />}></Route>
<Route  path='/city' element={<City />}></Route>
<Route  path='/login' element={<Login />}></Route>
<Route  path='/signup' element={<Signup />}></Route>
<Route  path='/property' element={<Property />}></Route>
<Route  path='/hotels' element={<Hotels />}></Route>
<Route  path='/resturent' element={<Resturent />}></Route>
<Route path='/portfolio' element={<Portfolio />}></Route>
<Route path='/projects' element={<Projects />}></Route>
<Route path='/about' element={<About />}></Route>
<Route path='/Services' element={<Services />}></Route>
<Route path='/Contact' element={<Contact />}></Route>
<Route path='/chat' element={<Chat />}></Route>
<Route path='/hire' element={<Hire />}></Route>
</Routes>
</ErrorBoundary>

<Footer />


   
   
    
    </>
  );
}

export default App;
