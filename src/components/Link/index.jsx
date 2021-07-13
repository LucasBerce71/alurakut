import React, { memo } from "react";

function Link({ to, children, ...rest }) {
  return (
    <a href={to && to} {...rest}>
      {children}
    </a>
  );
}

export default memo(Link);