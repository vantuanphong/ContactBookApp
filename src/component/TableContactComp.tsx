import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

//only use for contact list
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface TABLESTATE {
  columns: any;
  rows: any;
  onEdit?: any;
  onDelete?: any;
}

const TableContactComp: React.FC<TABLESTATE> = (props) => {
  const { columns, rows, onEdit, onDelete } = props
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Table contact">
        <TableHead>
          <TableRow>
            {columns?.map((column: any) => (
              <TableCell key={column.name}>{column.name}</TableCell>
            ))}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0? rows.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell><Button variant="contained" color="primary" onClick={() => onEdit(row)}>Edit</Button> <Button variant="contained" color="secondary" onClick={() => onDelete(row.id)}>Delete</Button></TableCell>
            </TableRow>)) : (<TableRow> <TableCell>There is no data of contact list</TableCell></TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContactComp;