import React from 'react';
import styled from 'styled-components';
import MuiTableHead from '@material-ui/core/TableHead';
import { TableHeadProps } from '@material-ui/core/TableHead/TableHead';

export type StyledTableHeadProps = {
  backgroundcolor?: boolean,
  colorLight?: boolean,
  padding?: boolean,
}

export const TableHead = styled(
  ({ ...rest }: TableHeadProps) => (
    <MuiTableHead {...rest} />
  ),
)<StyledTableHeadProps>`
  th {
    text-transform: uppercase;
    font-weight: 900;
    color: ${(props) => (props.colorLight ? props.theme.color.white[100] : 'inherit')};
    padding: ${(props) => (props.padding ? props.theme.spacing.M : props.theme.spacing.S)};
  }

  background-color: ${(props) => (
    props.backgroundcolor ? props.theme.color.green[500] : 'transparent'
  )};
`;
