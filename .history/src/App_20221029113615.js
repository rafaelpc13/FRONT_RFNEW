import logo from './logo.svg';
import './App.css';
import { TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core'
import { Input, TextField, Button} from '@material-ui/core'
function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', marginTop: '20px',gap:'2rem' }}>
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

        <Button style={{ background:"blue",color:'white', right:'0' }}>
          Descargar</Button>

        {/* <h3>Restaurante</h3> */}

      </div>
      <TableContainer>
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
