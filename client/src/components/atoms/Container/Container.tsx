import styled from 'styled-components';

export type StyledContainerProps = {
  fullVertical?: string,
  small?: string,
  full?: string,
}

export const Container = styled.div<StyledContainerProps>`
    margin: 0 auto; 
    padding-bottom: ${(props) => {
    if (props.fullVertical) return 0;
    if (props.small) return '1.5rem';
    return '2.5rem';
  }};
    padding-left: ${(props) => {
    if (props.full) return 0;
    return 'calc((100vw - 96rem) / 2)';
  }};
    padding-right: ${(props) => {
    if (props.full) return 0;
    return 'calc((100vw - 96rem) / 2)';
  }};
    padding-top: ${(props) => {
    if (props.fullVertical) return 0;
    if (props.small) return '1.5rem';
    return '2.5rem';
  }};
`;
