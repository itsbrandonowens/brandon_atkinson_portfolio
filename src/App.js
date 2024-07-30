
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import About from './components/About'
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      
      <IndexPage />
      <About />
      <Service />
      <Portfolio />
      <Contact />


    </div>
  );
}

export default App;
