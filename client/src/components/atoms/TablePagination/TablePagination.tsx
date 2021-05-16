import React from 'react';
import MuiTablePagination, { TablePaginationProps } from '@material-ui/core/TablePagination';

export const TablePagination: React.FC<TablePaginationProps> = (props) => (
  <MuiTablePagination {...props} />
);
