import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, useMediaQuery } from '@mui/material';
import RoutePaths from '../../utils/RoutePaths';

const validationRegisterSchema = yup.object({
  email: yup.string().email('Agrega un correo valido').required('El correo es requerido'),
  name: yup.string().required('El nombre es requerido').nonNullable(),
  username: yup.string().required('El nombre de usuario es requrido').nonNullable(),
  password: yup.string().min(8, 'Tu contraseña debe de tener al menos 8 caracteres').required('Tu contraseña es requerida'),
});

const Register = () => {
  const mobile = useMediaQuery('(max-width: 700px');
  const registerForm = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationRegisterSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  const { email, name, username, password } = registerForm.values;
  return (
    <Container fixed>
      <Box
        sx={{
          bgcolor: 'white',
          marginTop: '5rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: !mobile ? '20%' : '5%',
          marginRight: !mobile ? '20%' : '5%',
        }}
      >
        <form onSubmit={registerForm.handleSubmit}>
          <TextField
            fullWidth
            id='name'
            name='name'
            label='Nombre Completo'
            value={name}
            onChange={registerForm.handleChange}
            error={registerForm.touched.name && Boolean(registerForm.errors.name)}
            helperText={registerForm.touched.name && registerForm.errors.name}
            sx={{ marginBottom: '1em', marginTop: '1em' }}
            variant='standard'
          />
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Correo'
            value={email}
            onChange={registerForm.handleChange}
            error={registerForm.touched.email && Boolean(registerForm.errors.email)}
            helperText={registerForm.touched.email && registerForm.errors.email}
            sx={{ marginBottom: '1em', marginTop: '1em' }}
            variant='standard'
          />
          <TextField
            fullWidth
            id='username'
            name='username'
            label='Nombre de usuario'
            value={username}
            onChange={registerForm.handleChange}
            error={registerForm.touched.username && Boolean(registerForm.errors.username)}
            helperText={registerForm.touched.username && registerForm.errors.username}
            sx={{ marginBottom: '1em', marginTop: '1em' }}
            variant='standard'
          />
          <TextField
            fullWidth
            id='password'
            name='password'
            label='Contraseña'
            value={password}
            type='password'
            onChange={registerForm.handleChange}
            error={registerForm.touched.password && Boolean(registerForm.errors.password)}
            helperText={registerForm.touched.password && registerForm.errors.password}
            sx={{ marginBottom: '1em', marginTop: '1em' }}
            variant='standard'
          />
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Acceder
          </Button>
        </form>
        <Typography>
          ¿Ya tienes cuenta? <Link to={RoutePaths.LOGIN}>Accede aqui</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
