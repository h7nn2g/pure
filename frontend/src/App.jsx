import react from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';
import NotFound from './pages/NotFound';
import Submitted from './pages/Submitted';

function App() {
  return(
    <BrowserRouter>
        <div className="app-container">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/application' element={<Application />} />
                <Route path='/submitted' element={<Submitted />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;