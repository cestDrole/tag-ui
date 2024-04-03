import { Box, Container, Typography } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GridData from './components/DataGrid';
import PageSizeInput from './components/PageSizeInput';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="md">
        <Typography variant="h5" sx={{ mt: 4 }}>
          Zadanie rekrutacyjne - Sebastian Jasnosz
        </Typography>
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          sx={{ mt: 2, mb: 2 }}
        >
          <PageSizeInput />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="top"
          // minHeight={'80vh'}
        >
          <GridData />
        </Box>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
