
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authintications/Login/Login';
import Registart from './Components/Authintications/Registar/Registart';
import RequireAuth from './Components/Authintications/RequireAuth/RequireAuth';
import Home from './Components/Home/Home';
import Navber from './Components/Navber/Navber';
import About from './Components/Pages/About/About';
import AddItems from './Components/Pages/AddItems/AddItems';
import Blogs from './Components/Pages/Blogs/Blogs';
import Inventory from './Components/Pages/Inventory/Inventory';
import Manage from './Components/Pages/Manage/Manage';
import MyItems from './Components/Pages/MyItems/MyItems';
import NotFound from './Components/Pages/NotFound/NotFound';

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
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
