import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LOImageSlider from './components/LOImageSlider';
import FDMImageSlider from './components/FDMImageSlider';
import BJImageSlider from './components/BJImageSlider';
import TTTImageSlider from './components/TTTImageSlider';
import LMSImageSlider from './components/LMSImageSlider'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/brandon_atkinson_portfolio' element={<HomePage />} />
        <Route path='/last_orders' element={<LOImageSlider />} />
        <Route path='/career_framework' element={<FDMImageSlider />} />
        <Route path='/lms_project' element={<LMSImageSlider />} />
        <Route path='/blackjack' element={<BJImageSlider />} />
        <Route path='/tictactoe' element={<TTTImageSlider />} />
      </Routes>
    </div>

  );
}

export default App;
