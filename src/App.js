import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LOImageSlider from './components/LOImageSlider';
import FDMImageSlider from './components/FDMImageSlider';
import BJImageSlider from './components/BJImageSlider';
import TTTImageSlider from './components/TTTImageSlider';
import LMSImageSlider from './components/LMSImageSlider'
import ChessImageSlider from './components/ChessImageSlider';
import TMSImageSlider from './components/TMSImageSlider';
import Navbar from './components/Navbar';
import DSSpotImageSlider from './components/DSSpotImageSlider';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/brandon_atkinson_portfolio' element={<HomePage />} />
        <Route path='/last_orders' element={<LOImageSlider />} />
        <Route path='/career_framework' element={<FDMImageSlider />} />
        <Route path='/lms_project' element={<LMSImageSlider />} />
        <Route path='/blackjack' element={<BJImageSlider />} />
        <Route path='/tictactoe' element={<TTTImageSlider />} />
        <Route path='/chess_game' element={<ChessImageSlider />} />
        <Route path='/tms_project' element={<TMSImageSlider />} />
        <Route path='/discord_spotify' element={<DSSpotImageSlider />} />
      </Routes>
    </div>

  );
}

export default App;
