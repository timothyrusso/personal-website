import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeProvider } from './contexts/dark-mode-context-provider';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
