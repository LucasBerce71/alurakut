import React, { memo } from 'react';

function WelcomeArea({ children, ...rest }) {
  return (
    <div 
      className="welcomeArea" 
      style={{ gridArea: "welcomeArea" }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default memo(WelcomeArea);