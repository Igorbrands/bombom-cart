import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from './styles/global';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <GlobalStyles />
    <Dashboard />
  </QueryClientProvider>,

  document.getElementById('root')
);
