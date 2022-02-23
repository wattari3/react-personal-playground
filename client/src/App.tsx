import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import TesseractPage from './pages/TesseractPage';
import './style/style.scss'

function App() {
  return (
    <div className="Layout">
      <header className="Layout">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tesseract" element={<TesseractPage />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
