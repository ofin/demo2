import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Template from './pages/_Template';
import Partai from './pages/partai/_index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Template />} >
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/partai' element={<Partai />} />
                    <Route exact path='/pemenangan_a' element={<Partai />} />
                    <Route exact path='/pemenangan_b' element={<Partai />} />
                    <Route exact path='/relawan_tps' element={<Partai />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
