import logo from './logo.svg';
import './App.css';
import {TableContainer,Table, TableBody, TableRow,TableCell, TableHead} from '@material-ui/core'
function App() {
  return (
    <div className="App">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
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
