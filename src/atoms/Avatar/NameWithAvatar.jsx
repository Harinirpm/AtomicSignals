import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function NameWithAvatar({ name, avatarSrc }) {
  return (
    <Stack direction="row" alignItems="center">
      <Avatar alt={name} src={avatarSrc} sx={{ marginRight: 1,height:"20px",width:"20px"}} />
      <span style={{fontSize:"16px"}}>{name}</span>
    </Stack>
  );
}
export default NameWithAvatar;
