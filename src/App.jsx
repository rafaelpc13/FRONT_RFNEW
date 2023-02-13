
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import AuthLayout from './layouts/AuthLayout';
import Principal from './paginas/Principal';
import Portada from './paginas/Portada';

//import env from "react-dotenv";

import { ProyectosProvider } from './context/ProyectosProvider'
//dotenv.config();
console.log(process.env.REACT_APP_BACKEND_URL)

function App() {


  return (
    <BrowserRouter>
      <ProyectosProvider>
        <Routes>
          <Route>
            
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Portada/>} />
              <Route path=":id" element={<Principal />} />   
            </Route>

            
            

          </Route>
        </Routes>
      </ProyectosProvider>




    </BrowserRouter>
  );
}


export default App;
