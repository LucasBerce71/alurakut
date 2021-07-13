import React, { memo } from 'react';
import { ProfileRelationsBoxWrapper } from './styles';

function ProfileRelationsArea({ children, ...rest }) {
  return (
    <div 
      className="profileRelationsArea" 
      style={{ gridArea: "profileRelationsArea" }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default memo(ProfileRelationsArea);