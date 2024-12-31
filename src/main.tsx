import React from 'react';
import ReactDOM from 'react-dom';
import type { Container } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  // Import axe dynamically to avoid including it in production builds
  import('@axe-core/react').then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);
  });
}
const container = document.getElementById('app') as Container;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
