import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GridData from './components/DataGrid';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GridData />
    </QueryClientProvider>
  );
}

export default App;
