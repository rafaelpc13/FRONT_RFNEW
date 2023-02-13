import logo from './logo.svg';
import './App.css';
import {TableContainer,Table, TableBody, TableRow,TableCell, TableHead} from '@material-ui/core'
function App() {
  return (
   /*  <div className="App">
      <h3>Restaurante</h3>
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
    </div> */

    <div clasName="cardbody">
    <div className="w-full flex flex-col" >
        <FuseScrollbars className="flex-grow overflow-x-auto">
            <Table className="min-w-xl" stickyHeader aria-label="sticky table" aria-labelledby="tableTitle">
                <TableHead>
                    <TableRow className="h-48 sm:h-64">
                        {rows.map(row => {
                            return (
                                <TableCell
                                    key={row.id}
                                    align={row.align}
                                    padding={row.disablePadding ? 'none' : 'default'}
                                    sortDirection={order.id === row.id ? order.direction : false}
                                >
                                    {row.sort && (
                                        <Tooltip
                                            title="Sort"
                                            placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                                            enterDelay={300}
                                        >
                                            <TableSortLabel
                                                active={order.id === row.id}
                                                direction={order.direction}
                                                onClick={createSortHandler(row.id)}
                                            >
                                                {row.label}
                                            </TableSortLabel>
                                        </Tooltip>
                                    )}
                                </TableCell>
                            );
                        }, this)}
                    </TableRow>
                </TableHead>


                <TableBody>
                    {_.orderBy(
                        props.DataTables,
                        [
                            o => {
                                switch (order.code) {
                                    case 'categories': {
                                        return o.categories[0];
                                    }
                                    default: {
                                        return o[order.id];
                                    }
                                }
                            }
                        ],
                        [order.direction]
                    )
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(n => {
                            const isSelected = selected.indexOf(n.code) !== -1;
                            return (
                                <TableRow
                                    className="h-64 cursor-pointer"
                                    hover
                                    role="checkbox"
                                    aria-checked={isSelected}
                                    tabIndex={-1}
                                    key={n._id}
                                    selected={isSelected}
                                >
                                     <TableCell component="th" scope="row">
                                        {n.Identificacion}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        {n.Codigo}
                                    </TableCell>
                                    {/*  <TableCell component="th" scope="row">
                                        {n.cups}
                                    </TableCell> */}
                                    <TableCell component="th" scope="row">
                                        {n.Nombre}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                    <TextField
                                     style={{width:"100px"}}
                                                className=""
                                                type="number"
                                                name="Cantidad"
                                                onChange={e => setCantidad(e.target.value)}
                                                label= {n.Cantidad}
                                         
                                                fullWidth
                                                variant="outlined"
                                                required
                                                size="small"
                                                
                                            />
                                      
                                    </TableCell>

                                   

                                    {<TableCell
                                        style={{ width: '7%', padding: '14px' }}
                                        component="th"
                                        scope="row"
                                        align="right">
                                        <div className="flex justify-content-center botonestabla">
                                            {/*  <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="23"
                                                fill="blue"
                                                className="bi bi-pencil-square icon-hover"
                                                viewBox="0 0 16 16"
                                                onClick={event => handleClick(n)}
                                            >
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                />
                                            </svg> */}

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="23"
                                                fill="red"
                                                viewBox="0 0 16 16"
                                                onClick={() => props.EliminarItemArray(n.Codigo)}
                                                className="bi bi-trash-fill ml-sm-4 icon-hover"
                                            >
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                            </svg>
                                        </div>
                                    </TableCell>}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </FuseScrollbars>

        <TablePagination
            className="overflow-hidden"
            component="div"
            count={props.DataTables.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
                'aria-label': 'Previous Page'
            }}
            nextIconButtonProps={{
                'aria-label': 'Next Page'
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
</div>
  );
}

export default App;
