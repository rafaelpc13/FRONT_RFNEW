
import './App.css';
import { TextField, Button } from '@material-ui/core'
import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import Card from './paginas/Card'
import ModalFormularioTarea from './componentes/ModalFormularioTarea';
function App() {

  const [fechainicial, setFechaInicial] = useState("");
  const [fechafinal, setFechaFinal] = useState("");


  const searcher = (e) => {
    setFechaInicial(e.target.value)
    console.log(e.target.value)
  }

  const searcher1 = (e) => {
    setFechaFinal(e.target.value)
    console.log(e.target.value)
  }

 /*  const editarProyecto = async proyecto => {
    
        const { data } = await put(`http://localhost:4000/user/${proyecto.id}`, proyecto)
  
    
    } */


  useEffect(() => {

  }, [])

  /* fetch(`http://localhost:4000/products/${fechainicial}/${fechafinal}`, */

  const llamada = (proyecto) => {

    fetch(`http://localhost:4000/products/${fechainicial}/${fechafinal}`, {
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
      console.log("solicitud de pago realizada")
      console.log(data)
    })
    .catch(err => console.log('err', err));

    setFechaInicial("")
    setFechaFinal("")

    return 
    console.log(proyecto.id)


  }

  const submitProyecto = async proyecto => {
        await llamada(proyecto)
}

  return (
    <div className="App" style={{ marginLeft: "50px", marginRight: "50px" }}>
     

      <div style={{ display: 'flex', gap: '2rem', marginBottom: '20px', marginLeft: '10px', marginTop: "50px" }}>

        <TextField
          type="text"
          label="NUMERO"
          value={fechainicial}
          onChange={searcher}
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          type="text"
          label="VALOR"
          value={fechafinal}
          onChange={searcher1}
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          id="btn"
          style={{
            background: "rgb(59 235 123)",
            color: 'black',
            fontSize: '10px',
          }}
          onClick={() => llamada()}
        >
          Generar OC</Button>


      </div>

 <div id ="contCard" >
      
        <Card />
      </div> 




    </div>
  );
}


export default App;
