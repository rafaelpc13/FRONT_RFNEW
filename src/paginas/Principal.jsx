
import {  useParams } from 'react-router-dom'
import Card from './Card'
import useProyectos from "../hooks/useProyectos"
import './principal.css';
import ModalFormularioTarea from "../componentes/ModalFormularioTarea"
import Header from '../componentes/Header'
import { useEffect,useState } from 'react';
import io from 'socket.io-client'
import Carta from './Carta'

let socket;
const Principal = () => {

  const params = useParams()
  //const [numeroganador, setNumeroganador] = useState([]);

  const { obtenerProyecto, precio, submitActualizarNumero,modificarEstado,numeroganador } = useProyectos()
  const [repetidor, setRepetidor] = useState(10)

//console.log(precio.tickets.numero)

  useEffect(() => {
    obtenerProyecto(params.id)

  }, [])

  useEffect(() => {
    socket = io(process.env.REACT_APP_BACKEND_URL)
    socket.emit('abrir ventana', params.id)

  }, []);

   
  useEffect(() => {
    socket.on('agregada',(numeroActualizado)=>{
      if(numeroActualizado.precio === precio._id){
        submitActualizarNumero(numeroActualizado)
      }
    })


    socket.on('nuevo estado',(estadoActualizado)=>{
      if(estadoActualizado.precio === precio._id){
        modificarEstado(estadoActualizado)
      }
    })


  }, ) 
 
  const { nombre, descripcion } = precio


   /* useEffect(() => {
    const interval = setInterval(() => {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById("titulo").style.color = "#" + randomColor;

    }, 1000);
  }, []);  */


  return (

    <>
       <Header />  
      <div style={{ display: 'flex', gap: '4rem' }} >

         <h1 id="titulo"
          style={{ marginLeft: '30px', textAlign: 'center' }} className="font-black">Escoge tu numero y probemos suerte</h1>
 

      </div>
     <div><h4>{nombre}</h4></div> 
      <div><h1 > </h1></div>
      <div><h5>El usuario GANADOR de hoy es: {numeroganador.usuarioGanador} CON EL NUMERO :{numeroganador.numero}</h5></div>  
      <div style={{ margin: '30px', textAlign: 'center' }}>
        <div id='contCard'>

           {precio.numeros?.length ?
             precio.numeros.map(numer => (
              <Card
                key={numer._id}
                numer={numer} />
            )) 
            :
            <p className="text-center text-gray-500 uppercase p-5">No hay disponibles aun Create uno</p>
          } 
          <ModalFormularioTarea />
        </div>
      </div>
    </>

  )
}

export default Principal;
