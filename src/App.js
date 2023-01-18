import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
