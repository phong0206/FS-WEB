// ForgotPassword.js
import React, {useState} from 'react';
import { Container, Paper, TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions  } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Email is required').email('Email invalid'),
    }),
    onSubmit: async (values: any) => {
      //handle request api register
      // const res = await api.register({
      //   email: values.email,
      //   password: values.password,
      //   lastName: values.lastName,
      //   username: values.username,
      //   confirmPassword: values.confirmPassword,
      // });
      setSuccessDialogOpen(true);
    },
  });

  const handleDialogClose = () => {
    setSuccessDialogOpen(false);
  };
  const handleBackToLogin = () => {
    navigate('/login')
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop: '50%'}}>
        <LockOutlinedIcon sx={{ fontSize: 40, marginBottom: 2 }} />
        <Typography variant="h5">Forgot Password</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button margin="normal" variant="contained" color="primary" onClick={formik.handleSubmit} sx={{marginTop: 1}}>
          Reset Password
        </Button>
        <Button color="primary" startIcon={<ArrowBackIcon />} href="login" sx={{fontSize: 14, fontWeight: 'bold', marginTop: 2}}>
          Back to Login
        </Button>
        
      </Paper>
       <Dialog open={successDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Email Sent Successfully</DialogTitle>
        <DialogContent>
          <Typography>Please check your email for further instructions.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBackToLogin} color="primary" startIcon={<ArrowBackIcon />}>
            Back to Login
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ForgotPassword;
