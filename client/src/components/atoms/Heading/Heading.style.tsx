import styled, { css } from 'styled-components';

export type baseStyleProps = {
  light?: boolean,
  noMargin?: boolean,
  center?: boolean,
  right?: boolean,
}

const baseStyle = css<baseStyleProps>`
    color: ${(props) => (props.light
    ? props.theme.color.white.primary
    : props.theme.color.black.primary
  )};
    font-weight: 600;
    margin-bottom: ${(props) => props.noMargin && '0'};
    margin-top: 0;
    max-width: 100%; 
    text-align: ${(props) => {
    if (props.center) return 'center';
    if (props.right) return 'right';
    return 'inherit';
  }};
`;

export const HeadingOne = styled.h1`
    font-size: ${(props) => props.theme.fontSize.xxl};
    margin-bottom: ${(props) => props.theme.spacing.large};
    ${baseStyle};
`;
export const HeadingTwo = styled.h2`
    font-size: ${(props) => props.theme.fontSize.xl};
    margin-bottom: ${(props) => props.theme.spacing.medium};
    ${baseStyle};
`;
export const HeadingThree = styled.h3`
    font-size: ${(props) => props.theme.fontSize.large};
    margin-bottom: ${(props) => props.theme.spacing.small};
    ${baseStyle};
`;
export const HeadingFour = styled.h4`
    font-size: ${(props) => props.theme.fontSize.medium};
    margin-bottom: ${(props) => props.theme.spacing.xs};
    ${baseStyle};
`;
export const HeadingFive = styled.h5`
    font-size: ${(props) => props.theme.fontSize.small};
    margin-bottom: ${(props) => props.theme.spacing.xss};
    ${baseStyle};
`;
