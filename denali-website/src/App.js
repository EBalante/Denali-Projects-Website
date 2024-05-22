import CareersPage from './components/CareersPage';
import SolutionsPage from './components/Solutions';
import ContactPage from './components/Contact';
import HomeMainSection from './components/HomeMainSection';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ProvenSuccess from './components/ProvenSuccess';
import InsideDenali from './components/InsideDenali'
import HomePage from './components/HomePage'; 
import CareerOpportunities from './components/CareerOpportunities';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<HomePage />} />
    <Route path = "/HomeMainSection" element = {<HomeMainSection/>} />
    <Route path = "/Header" element = {<Header/>} />
    <Route path = "/Footer" element = {<Footer/>} />
    <Route path ="/CareersPage" element = {<CareersPage/>} />
    <Route path ="/Solutions" element = {<SolutionsPage/>} />
    <Route path ="/Contact" element = {<ContactPage/>} />
    <Route path ="/AboutUs" element = {<AboutUs/>}/>
    <Route path ="/ProvenSuccess" element = {<ProvenSuccess/>}/>  
    <Route path ="/InsideDenali" element = {<InsideDenali/>}/>
    <Route path ="/CareerOpportunities" element = {<CareerOpportunities/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;