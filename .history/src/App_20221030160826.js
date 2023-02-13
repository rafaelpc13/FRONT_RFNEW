import logo from './logo.svg';
import './App.css';
import { TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core'
import { Input, TextField, Button} from '@material-ui/core'
import React from 'react';

function App() {

  const fetchData = async () =>{
    console.log (employee) ;
    const newData = await fetch('http://localhost:4000/products',{
    method: POST,
    headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
     })
    .then(res => res.json ())
    console. log (newData);
    setReturnedData (newData . result)
    }

  return (
    <div className="App" style={{ }}>
      <div style={{ display: 'flex', marginTop: '20px',gap:'2rem', marginBottom:'20px',marginLeft:'10px' }}>
        <TextField
          type="datetime-local"
          label="Fecha Inicial"
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          type="datetime-local"
          label="Fecha Final"
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
        />
         <Button  style={{ background:"yellow",color:'black' }}>
          Buscar</Button>

        <Button  style={{ background:"blue",color:'white' }}>
          Descargar</Button>

        {/* <h3>Restaurante</h3> */}

      </div>
      <TableContainer style={{ }}>
        <Table className="min-w-xl" stickyHeader aria-label="sticky table" aria-labelledby="tableTitle">
          <TableHead>
            <TableRow className="h-48 sm:h-64">
              <TableCell>CAMPO 1</TableCell>
              <TableCell>CAMPO 2</TableCell>
              <TableCell>CAMPO 3</TableCell>
              <TableCell>CAMPO 4</TableCell>
              <TableCell>CAMPO 5</TableCell>
              <TableCell>CAMPO 6</TableCell>
              <TableCell>CAMPO 7</TableCell>
              <TableCell>CAMPO 8</TableCell>
              <TableCell>CAMPO 9</TableCell>
              <TableCell>CAMPO 10</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
