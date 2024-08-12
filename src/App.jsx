import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Formulario from './pages/Formulario/Formulario';
import Header from './components/Header/Header';
import Favorites from './pages/LikedProducts/LikedProducts';
import { FavoritesProvider } from './components/Store/Providers/FavoriteContext';


function App() {
  return (
    <div>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/form' element={<Formulario />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/favs' element={<Favorites />}></Route>
        </Routes>
      </FavoritesProvider>
    </div>
  );
}

export default App;
