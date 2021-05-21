import styled, { css } from 'styled-components';

export type baseStyleProps = {
  light?: boolean,
  noMargin?: boolean,
  center?: boolean,
  right?: boolean,
}

const baseStyle = css<baseStyleProps>`
    color: ${(props) => (props.light
    ? props.theme.color.white[100]
    : props.theme.color.black[100]
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
    font-size: ${(props) => props.theme.fontSize.XL};
    margin-bottom: ${(props) => props.theme.spacing.L};
    ${baseStyle};
`;
export const HeadingTwo = styled.h2`
    font-size: ${(props) => props.theme.fontSize.XL};
    margin-bottom: ${(props) => props.theme.spacing.M};
    ${baseStyle};
`;
export const HeadingThree = styled.h3`
    font-size: ${(props) => props.theme.fontSize.L};
    margin-bottom: ${(props) => props.theme.spacing.S};
    ${baseStyle};
`;
export const HeadingFour = styled.h4`
    font-size: ${(props) => props.theme.fontSize.M};
    margin-bottom: ${(props) => props.theme.spacing.XS};
    ${baseStyle};
`;
export const HeadingFive = styled.h5`
    font-size: ${(props) => props.theme.fontSize.S};
    margin-bottom: ${(props) => props.theme.spacing.XS};
    ${baseStyle};
`;
