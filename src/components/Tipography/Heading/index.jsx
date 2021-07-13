import React, { memo } from 'react';

function Heading({ as, className, children, ...rest }) {
  return (
    React.createElement(
      as ? as : 'h1',
      {
        style: {...rest},
        className: className && className
      },
      children 
    )
  );
}

export default memo(Heading);