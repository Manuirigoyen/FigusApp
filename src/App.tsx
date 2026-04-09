import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

import { Ruleta } from './components/rulet/Ruleta';
import { Intercambios }  from './components/intercambios/Intercambios'; //manuel
import { Tienda } from './components/tienda/Tienda'; //martin 
import {Login} from './components/login/Login'; //manuel
import { Register }  from './components/register/Register'; //martin
import { Err_404 }  from './components/error/Err_404'; //por definir (react por defecto?)

import { Admin } from './components/admin/Admin';
import { User }  from './components/user/User';

import Album  from './components/album/Album';
import Billetera from './components/billetera/Billetera';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/negociaciones" element={<Intercambios/>}/>
          <Route path="/ruleta" element={<Ruleta />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Err_404/>}/>

          <Route path="/user" element={<User/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/album" element={<Album/>}/>
          <Route path="/billetera" element={<Billetera/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
