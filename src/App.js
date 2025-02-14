import logo from './logo.svg';
import './App.css';
import Homme_page from "./Components/Hommepage/Homme_page"
import ContactUs from './Components/ContactUs/Contuct_Us';
import AboutUs from './Components/PeapleRate/PeapleRate/AboutUs'
import Footer from "./Components/Footer/Footer/Footer"
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
// import Footer from './Components/Footer/Footer';
// import AboutUs from "./Components/PeapleRate/AboutUs"
function App() {
  return (
    <div className="App">
       {/* <Homme_page/>

       <br/>
       <br/>
       <ContactUs/> */}


         


      
            <Routes>
                <Route path="/" element={ <Homme_page/>} />
                <Route path="/Contact_Us" element={ <ContactUs/>} />
            </Routes>
              <AboutUs/>

              {/* the footer  */}
              <Footer/>


             
          
       
    </div>
  );
}

export default App;
