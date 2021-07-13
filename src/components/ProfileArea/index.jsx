import React, { memo } from 'react';

function ProfileArea({ children, ...rest }) {
  return (
    <div 
      className="profileArea" 
      style={{ gridArea: "profileArea" }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default memo(ProfileArea);