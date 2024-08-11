import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Formulario from './pages/Formulario/Formulario';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='form' element={<Formulario />}></Route>
        <Route path='store' element={<Store />}></Route>
      </Routes>
    </div>
  );
}

export default App;
