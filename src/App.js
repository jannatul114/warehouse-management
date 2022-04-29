
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authintications/Login/Login';
import Registart from './Components/Authintications/Registar/Registart';
import Home from './Components/Home/Home';
import Navber from './Components/Navber/Navber';
import Blogs from './Components/Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registar' element={<Registart></Registart>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

      </Routes>

    </div>
  );
}

export default App;
