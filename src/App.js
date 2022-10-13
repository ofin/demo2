import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Template from './pages/_Template';
import Personil from './pages/personil/_index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Template />} >
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/personil' element={<Personil />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
