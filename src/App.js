
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Join from './pages/Join';

function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/services' element = {<Services />}/>
      <Route path='/join' element = {<Join />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
