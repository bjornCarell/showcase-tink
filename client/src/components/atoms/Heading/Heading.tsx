import React from 'react';
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
} from './Heading.style';

export type HeadingProps = {
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  h5?: boolean,
  noMargin?: boolean,
  right?: boolean,
  center?: boolean,
}

export const Heading: React.FC<HeadingProps> = ({ ...props }): JSX.Element => {
  if (props.h2) {
    return (
      <HeadingTwo
        noMargin={props.noMargin}
        right={props.right}
        center={props.center}
        {...props}
      />
    );
  }
  if (props.h3) {
    return (
      <HeadingThree
        noMargin={props.noMargin}
        right={props.right}
        center={props.center}
        {...props}
      />
    );
  }
  if (props.h4) {
    return (
      <HeadingFour
        noMargin={props.noMargin}
        right={props.right}
        center={props.center}
        {...props}
      />
    );
  }
  if (props.h5) {
    return (
      <HeadingFive
        noMargin={props.noMargin}
        right={props.right}
        center={props.center}
        {...props}
      />
    );
  }
  return (
    <HeadingOne
      noMargin={props.noMargin}
      right={props.right}
      center={props.center}
      {...props}
    />
  );
};
