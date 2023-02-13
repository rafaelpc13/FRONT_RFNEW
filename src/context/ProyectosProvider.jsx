import { useState, createContext } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import io from 'socket.io-client'


let socket;

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {

    const [precio, setPrecio] = useState([]);
    const [precios, setPrecios] = useState([]);
    const [modal, setModal] = useState(false);
    const [alet, setAlet] = useState('')
    const [numeroganador, setNumeroganador] = useState([])

    useEffect(() => {
        const obtenerModalidades = async () => {
            try {
                const { data } = await axios(`${process.env.REACT_APP_BACKEND_URL}/`)
                setPrecios(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerModalidades()
    }, [])


    socket = io(process.env.REACT_APP_BACKEND_URL)


    const obtenerProyecto = async id => {
        try {
            const { data } = await axios(`${process.env.REACT_APP_BACKEND_URL}/precio/${id}`)
            setPrecio(data)
        } catch (error) {
            console.log(error)
        }
    }
    socket.on('eventName', () => {
        console.log(`Un nuevo usuario se ha conectado`);
        NumeroGanador()
    })


     const NumeroGanador = async () => {
        const min = 0, max = 10;
        const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(aleatorio)
        const numero = aleatorio
         const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/numero/ganador/${numero}`)
        console.log(data)
        const usuarioGanador = data.usuario
        const precio = data.precio 
    submitcrearNumero({ numero, usuarioGanador, precio })
    } 

     const submitcrearNumero = async (NG) => {

        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ticket`, NG)
        console.log(data)
        setNumeroganador(data)
        console.log(numeroganador)
    } 

    const [tira, setTira] = useState({})

    const handleEditarTira = tira => {
        setTira(tira)
    }

    const handlemodal = () => {
        setModal(!modal)
    }

    const editarTarea = async tira => {
    
        try {
            const { data } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/numero/${tira.id}`, tira)
        
            setModal(false)
            //SOCKET IO
            socket.emit('actualizar', data)
        } catch (error) {
            console.log(error)
        }
    }

    const llamada = async tira => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/products/${tira.celular}/${tira.valor}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Accept: 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => data)
            .then(data => {
                console.log("solicitud de pago realizada")
                let aux = data.mesage.transactionId

                setTimeout(() => {
                    console.log(tira)
                    fetch(`${process.env.REACT_APP_BACKEND_URL}/product/${aux}`, {
                        method: 'POST',
                        /// body: e,
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                            Accept: 'application/json',
                            //Authorization: `Basic MTIzOjEyMw==`
                        }
                    })
                        .then(res => res.json())
                        .then(data => data)
                        .then(async data => {
                            console.log(`-----------------> ${data.mesage}`)
                            console.log("Consulta realizada")

                            if (data.mesage === '33') {
                                console.log("entro----------------")
                                const { data } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/numero/estado/${tira.id}`,)
                                console.log(data)
                                socket.emit('cambiar', data)
                            }
                        })
                        .catch(err => console.log('err', err));
                }, 3000)
            })
            .catch(err => console.log('err', err));
        return
    }

    /*   const consulta = async (aux) => {
          console.log(`realizado desde consulta ----> ${aux}`)
         // console.log(`realizado desde consulta ----> ${tira}`)
          fetch(`http://localhost:4000/product/${aux}`, {
              method: 'POST',
              /// body: e,
              headers: {
                  'Content-Type': 'application/json; charset=UTF-8',
                  Accept: 'application/json',
                  //Authorization: `Basic MTIzOjEyMw==`
              }
          })
              .then(res => res.json())
              .then(data => data)
              .then(data => {
                  console.log(data)
                  console.log("Consulta realizada")
                  cambiarEstado()
              })
  
              .catch(err => console.log('err', err));
          return
      } */

    /*  var hoy2 = new Date()
     var hactual =new Date(hoy2.getFullYear(), hoy2.getMonth(), hoy2.getDate(), hoy2.getHours(), hoy2.getMinutes());
     console.log(hactual);
   
     var hoy = new Date();
     let f1 = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), 12, 52);
     console.log(f1)
   
     useEffect(() => {
         const interval = setInterval(() => {
             if (hactual.getTime() == f1.getTime()) {
                 console.log("entro")
                 const min = 0, max = 100;
                 const gf = Math.floor(Math.random() * (max - min + 1) + min);
                 setAlet(gf)
                 return
               }else{
                 console.log("las horas no son iguales")
               }
         }, 30000);
        // return () => clearInterval(interval);
       }, []); */
    /////////////////////////////////////////////////////////

    // SOCKET IO

    const submitActualizarNumero = tarea => {
        const proyectoActualizado = { ...precio }
        proyectoActualizado.numeros = proyectoActualizado.numeros.map(tareaState => tareaState._id === tarea._id ? tarea : tareaState)
        setPrecio(proyectoActualizado)
    }

    const modificarEstado = tarea => {
        const proyectoActualizado = { ...precio }
        proyectoActualizado.numeros = proyectoActualizado.numeros.map(tareaState => tareaState._id === tarea._id ? tarea : tareaState)
        setPrecio(proyectoActualizado)
    }

    return (
        <ProyectosContext.Provider
            value={{
                precios,
                handleEditarTira,
                tira,
                modal,
                handlemodal,
                editarTarea,
                llamada,
                alet,
                obtenerProyecto,
                precio,
                submitActualizarNumero,
                modificarEstado, numeroganador 

            }}>
            {children}
        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext