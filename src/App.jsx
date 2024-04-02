import { Box, Container, Typography } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GridData from './components/DataGrid';
import PageSizeInput from './components/PageSizeInput';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="sm">
        <Typography>Hello</Typography>
        <Box display="flex" justifyContent="end" alignItems="center">
          <PageSizeInput />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight={'80vh'}
        >
          <GridData />
        </Box>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
