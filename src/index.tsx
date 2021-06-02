import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles.css';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Dashboard />
  </QueryClientProvider>,

  document.getElementById('root')
);
