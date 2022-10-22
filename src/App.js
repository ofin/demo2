import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Template from './pages/_Template';
import Partai from './pages/manajemen_tim/Partai';
import { createTheme, ThemeProvider } from '@mui/material';
import Agenda from './pages/Agenda';
import Pemilih from './pages/Pemilih';

function App() {

    const theme = createTheme({
        palette: {
            breadcrumbsBg: "linear-gradient(45deg, #292E49, #343957)",
            breadcrumbsColor: "rgb(255, 64, 129)"
        },
        typography: {
            fontFamily: [
                "muli-regular",
                '-apple-system',
                'BlinkMacSystemFont',
                '"poppins"',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                "Noto Color Emoji",
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Template />} >
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/partai' element={<Partai />} />
                        <Route exact path='/pemenangan_a' element={<Partai />} />
                        <Route exact path='/pemenangan_b' element={<Partai />} />
                        <Route exact path='/relawan_tps' element={<Partai />} />
                        <Route exact path='/data_pemilih' element={<Pemilih />} />
                        <Route exact path='/agenda' element={<Agenda />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
