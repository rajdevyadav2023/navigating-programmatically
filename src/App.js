import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import OrderSummary from './components/OrderSummary'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/order-summary' element={ <OrderSummary/> } />
      </Routes>
    </div>
  );
}

export default App;
