import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Coin from './components/Coin';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;