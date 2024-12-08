import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login.js'; // Ajuste o caminho conforme a localização do componente

function App() {
  return (
    <Router>
      <Routes>
        {/* Redireciona para /login como rota padrão */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
