import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LOImageSlider from './components/LOImageSlider';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/brandon_atkinson_portfolio' element={<HomePage />} />
        <Route path='/LastOrders' element={<LOImageSlider />} />
      </Routes>
    </div>

  );
}

export default App;
