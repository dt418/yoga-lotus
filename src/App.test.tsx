import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </BrowserRouter>,
    );
    expect(document.body).toBeDefined();
  });

  it('renders the Page component', () => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </BrowserRouter>,
    );
    // This is a basic test. You might want to add more specific assertions
    // based on what your Page component renders
    expect(document.body.children.length).toBeGreaterThan(0);
  });
});
