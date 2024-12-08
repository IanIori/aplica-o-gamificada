import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css'; // Opcional, apenas se existir o arquivo de estilo

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Certifique-se de que o `id="root"` está no `public/index.html`
);
