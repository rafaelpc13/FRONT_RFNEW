import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import useProyectos from "../hooks/useProyectos"
import { useState } from 'react';
import io, { Socket } from 'socket.io-client'
import { Link, useParams } from "react-router-dom"


//let socket;

export default function FormDialog() {
    const params = useParams()

    const { tira ,handlemodal, modal,llamada,editarTarea} = useProyectos()

   const [celular,setCelular]=useState('')
   const [usuario,setUsuario]=useState('')
   const [valor,setValor]=useState('')
   const [id, setId] = useState('')


  /*  useEffect(()=>{
    socket = io('http://localhost:4000')
    socket.emit('abrir proyecto',tira)
    
    },[]) */

    useEffect(() => {
        setCelular(tira.celular)
        setId(tira._id)
        setUsuario(tira.usuario)
        setValor(tira.valor)
    }, [tira])


    const handleSubmit = async e => {
        e.preventDefault();
      
        //para pasar los datos hacia el provider
        await editarTarea({id, celular, usuario, valor })
        setId('')
        setCelular('')
        setUsuario('')
        setValor('')
        await llamada({id, celular, usuario, valor })
    }

    return (
        <div>

            <Dialog open={modal} onClose={handlemodal}>
                <DialogTitle>Ingrese la informacion</DialogTitle>
                <DialogContent>
                <form className="bg-white py-10 px-5  rounded-lg"
                                        onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            type="text"
                            label="USUARIO"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                            variant="outlined"
                            size="small"
                            InputLabelProps={{
                                shrink: true
                            }}
                            style={{ marginBottom: '10px', marginTop: '10px' }}
                        />
                    </div>
                    <div>

                        <TextField
                            type="text"
                            label="NUMERO"
                            value={celular}
                            onChange={e => setCelular(e.target.value)}
                            variant="outlined"
                            size="small"
                            InputLabelProps={{
                                shrink: true
                            }}
                            style={{ marginBottom: '10px' }}
                        />


                    </div>
                    <div> <TextField
                        type="text"
                        label="VALOR"
                         value={valor}
                         onChange={e => setValor(e.target.value)}
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                            shrink: true
                        }}
                        style={{ marginBottom: '10px' }}

                    />

                    </div>
                    <div>
                    <input
                                            type="submit"
                                            value='pagar'
                                            className='bg-sky-600 w-full p-3 uppercase font-bold text-white
rounded cursor-pointer transition-color hover:bg-gray-400' />
                    </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlemodal}>Cancelar</Button>
                    {/*  <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}