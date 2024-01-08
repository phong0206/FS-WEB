import './App.css';
import { Suspense, lazy } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
function App() {
  const LazyLoadingLogin = lazy(() => import('./pages/Login/Login'));
  const LazyLoadingRegister = lazy(() => import('./pages/Register/Register'));
  const LazyLoadingNotFound = lazy(() => import('./pages/NotFound/NotFound'));
  const LazyLoadingFotgot = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));

  return (
    <>
      <Suspense fallback={<CircularProgress className="loading" />}>
        <Routes>
          <Route path="/login" element={<LazyLoadingLogin />} />
          <Route path="/register" element={<LazyLoadingRegister />} />
          <Route path="/forgot" element={<LazyLoadingFotgot />} />
          <Route path="/*" element={<LazyLoadingNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
