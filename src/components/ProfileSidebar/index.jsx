import React, { memo } from "react";

import { Box } from "../Box/styles";
import Picture from "../Picture";
import ProfileArea from "../ProfileArea";

function ProfileSidebar({ githubPicture, ...rest }) {
  return (
    <ProfileArea {...rest}>
      <Box>
        <Picture source={githubPicture && githubPicture} radius={8} />
      </Box>
    </ProfileArea>
  );
}

export default memo(ProfileSidebar);
