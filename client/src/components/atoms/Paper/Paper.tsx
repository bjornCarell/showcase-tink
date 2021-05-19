import React from 'react';
import styled, { css } from 'styled-components';
import MuiPaper, { PaperProps as MuiPaperProps } from '@material-ui/core/Paper';

export type PaperProps = {
  padding?: string;
  centerContent?: boolean;
  radius?: boolean;
  shadow?: boolean;
  relative?: boolean;
  marginBottom?: string;
} & MuiPaperProps

export const Paper = styled(
  ({
    centerContent,
    radius,
    padding,
    relative,
    shadow,
    marginBottom,
    ...rest
  }) => <MuiPaper {...rest} />,
)<PaperProps>`
  && {
    ${({ relative }) => relative
      && `
      position: relative;
    `}
    ${(props) => props.marginBottom
      && css`
        margin-bottom: ${props.theme.spacing.medium};
      `}

    border-radius: ${(props) => (props.radius
    ? `${props.theme.radius.medium}`
    : '0rem')};

    box-shadow: ${(props) => (props.shadow ? `${props.theme.shadow.around}` : '0px')};

    ${({ centerContent }) => centerContent
      && `
      margin-left: auto;
      margin-right: auto;
    `}
}
`;
