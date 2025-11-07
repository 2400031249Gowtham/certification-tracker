import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CertificationProvider } from './context/CertificationContext';

// Import pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddCertification from './pages/AddCertification';
import ViewCertifications from './pages/ViewCertifications';
import RenewalPage from './pages/RenewalPage';
import CertificationDetail from './pages/CertificationDetail';
import NotFound from './pages/NotFound';

// Import layout
import Layout from './components/layout/Layout';

function App() {
  return (
    <CertificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="certifications">
              <Route index element={<ViewCertifications />} />
              <Route path="add" element={<AddCertification />} />
              <Route path=":id" element={<CertificationDetail />} />
            </Route>
            <Route path="renewals" element={<RenewalPage />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CertificationProvider>
  );
}

export default App;
