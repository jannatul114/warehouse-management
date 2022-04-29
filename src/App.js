
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navber from './Components/Navber/Navber';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
