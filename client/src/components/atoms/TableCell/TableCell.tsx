import React from 'react';
import MuiTableCell, { TableCellProps as MuiTableCellProps } from '@material-ui/core/TableCell';
import styled from 'styled-components';

export interface TableCellProps extends MuiTableCellProps {
  align?: 'center' | 'left' | 'right';
  noBorder?: boolean;
  noWrap?: boolean;
}

export const TableCell = styled(({ ...rest }) => (
  <MuiTableCell {...rest} />
))<TableCellProps>`
  && {
    text-align: ${(props) => (props.align ? props.align : 'left')};
    white-space: ${(props) => (props.noWrap ? 'nowrap' : 'normal')};
  }
  ${(props) => props.noBorder
    && `
    && {
      border-bottom: none;
    }
  `}
`;
