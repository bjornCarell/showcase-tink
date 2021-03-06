import React from 'react';
import MuiTableBody, { TableBodyProps } from '@material-ui/core/TableBody';

export const TableBody: React.FC<TableBodyProps> = (props) => (
  <MuiTableBody {...props} />
);
