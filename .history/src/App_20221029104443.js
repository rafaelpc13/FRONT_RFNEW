import logo from './logo.svg';
import './App.css';
import {TableContainer,Table, TableBody, TableRow,TableCell, TableHead} from '@material-ui/core'
function App() {
  return (
    <div className="App">
      <h3>Restaurante</h3>
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
