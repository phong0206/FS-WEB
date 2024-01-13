import './App.css';
import { Suspense, lazy } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
function App() {
  const LazyLoadingLogin = lazy(() => import('./pages/Login/Login'));
  const LazyLoadingRegister = lazy(() => import('./pages/Register/Register'));
  const LazyLoadingNotFound = lazy(() => import('./pages/NotFound/NotFound'));
  const LazyLoadingFotgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
 const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
     <CssBaseline />
      <Suspense fallback={<CircularProgress className="loading" />}>
        <Routes>
          <Route path="/login" element={<LazyLoadingLogin />} />
          <Route path="/register" element={<LazyLoadingRegister />} />
          <Route path="/forgot-password" element={<LazyLoadingFotgotPassword />} />
          <Route path="/*" element={<LazyLoadingNotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
    </>
  );
}

export default App;
