import React from 'react';
import styled from 'styled-components';
import MuiTableHead from '@material-ui/core/TableHead';
import { TableHeadProps } from '@material-ui/core/TableHead/TableHead';

export type StyledTableHeadProps = {
  backgroundColor?: string
}

export const TableHead = styled(
  ({ ...rest }: TableHeadProps) => (
    <MuiTableHead {...rest} />
  ),
)<StyledTableHeadProps>`
  th {
    text-transform: uppercase;
    font-weight: 900;
  }

  background-color: ${(props) => (props.backgroundColor ? props.theme.color.grey : 'transparent')};
`;
