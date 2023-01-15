import React from 'react';
import { ButtonProps, Button } from '@mui/material';

const ButtonLink = <T extends React.ElementType>(props: ButtonProps<T, { component: T }>) => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};

export default ButtonLink;
