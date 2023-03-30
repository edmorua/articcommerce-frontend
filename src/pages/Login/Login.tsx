import React from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Container, Box, TextField, Button, Typography, useMediaQuery } from '@mui/material';
import RoutePaths from '../../utils/RoutePaths';

const validationLoginSchema = yup.object({
  email: yup.string().email('Agrega un correo valido').required('El correo es requerido'),
  password: yup.string().min(8, 'Tu contraseña debe de tener al menos 8 caracteres').required('Tu contraseña es requerida'),
  username: yup.string().required('El nombre de usuario es reuqerido'),
});

const Login = () => {
  const mobile = useMediaQuery('(max-width: 700px');
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: validationLoginSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  const { email, username, password } = formik.values;
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
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Correo'
            value={email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ marginBottom: '1em', marginTop: '1em' }}
            variant='standard'
          />
          <TextField
            fullWidth
            id='username'
            name='username'
            label='Nombre de usuario'
            value={username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ marginBottom: '1em', marginTop: '1em' }}
            variant='standard'
          />
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Acceder
          </Button>
        </form>
        <Typography>
          ¿Aun no tienes cuenta? <Link to={RoutePaths.LOGIN}>Registrate aqui</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
