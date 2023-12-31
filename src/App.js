import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Know from "./components/Know";
import Steps from "./components/Steps";
import Check from './components/Check'
import Faq from "./components/Faq";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import FaqPage from "./components/FaqPage";
import Products from "./components/Products";
import Adspy from "./components/Adspy/Adspy";



function Home(){
  return(
    <div>
    <Nav/>
    <Hero/>
    <Know/>
    <Steps />
    <Check />
    <Faq />
    </div>
  )
}




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/faq' element={<FaqPage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/adspy' element={<Adspy/>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
