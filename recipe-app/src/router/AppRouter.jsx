import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from '../component/globalStyles/Global.styles';
import Navbar from '../component/nav/Navbar';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (

    <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login/>}/>
        <Route path="about" element={<PrivateRouter/>}>
            <Route path="" element={<About/>}/>
        </Route>
    </Routes>

    </BrowserRouter>



    );
        
    
}

export default AppRouter;