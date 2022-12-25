import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Nav from './Components/Home/Nav';
import Contract from './Components/Contract/Contract';
import Academic from './Components/Academic/Academic';
import Blogs from './Components/Blogs/Blogs';
import History from './Components/History/History';
import Pages from './Components/Pages/Pages';
import Tutor from './Components/Tutor/Tutor';
import Footer1 from './Components/Home/Footer1';
import Footer from './Components/Home/Footer';
import Submit from './Components/Home/Submit';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <Routes>
      <Route path ='/' element={<Home></Home>}></Route>
      <Route path ='/contract' element={<Contract></Contract>}></Route>
      <Route path ='/academic' element={<Academic></Academic>}></Route>
      <Route path ='/blog' element={<Blogs></Blogs>}></Route>
      <Route path ='/history' element={<History></History>}></Route>
      <Route path ='/page' element={<Pages></Pages>}></Route>
      <Route path ='/tutor' element={<Tutor></Tutor>}></Route>
     </Routes>
     <div className="mt-20">
     <Submit></Submit>
     </div>
     <div className='mt-20'>
     <Footer1></Footer1>
     </div>
     
     <Footer></Footer>
    </div>
  );
}

export default App;
