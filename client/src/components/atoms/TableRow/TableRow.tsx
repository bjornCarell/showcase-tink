import React from 'react';
import MuiTableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';

export const TableRow = styled(({ ...rest }) => <MuiTableRow {...rest} />)`
  ${(props) => props.evenOdd
    && `
      && {
        &:nth-of-type(even) {
          background-color: ${props.theme.color.grey};
        }
      }
  `}
`;
