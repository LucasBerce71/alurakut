import React, { memo } from 'react';
import verifyTypeof from '../../hooks/verifyTypeof';

function Picture({ source, radius, ...rest }) {
  return (
    <img
      src={source && source}
      style={{ 
        borderRadius: verifyTypeof(radius) === 'string' 
        ? radius : verifyTypeof(radius) === 'number' 
        ? `${radius}px` : '' 
      }}
      {...rest}
    />
  );
}

export default memo(Picture);