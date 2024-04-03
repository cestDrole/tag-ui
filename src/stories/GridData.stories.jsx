import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GridData from '../components/DataGrid';
import { rest } from 'msw';

export default {
  id: 'GridData',
  component: GridData,
};

const defaultQueryClient = new QueryClient();

export const Success = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <GridData />
  </QueryClientProvider>
);

const MockTemplate = (queryFn) => {
  const mockedQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={mockedQueryClient}>
      <GridData queryFn={queryFn} />
    </QueryClientProvider>
  );
};

export const Loading = {
  render: () => MockTemplate(() => new Promise(() => {})),
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://api.stackexchange.com/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow',
          (req, res, ctx) => {
            return res(ctx.delay('infinite'));
          }
        ),
      ],
    },
  },
};

export const Error = {
  render: () =>
    MockTemplate(() => Promise.reject(new Error('error fetching data'))),

  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://api.stackexchange.com/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow',
          (req, res, ctx) => {
            return res(ctx.delay(0), ctx.status(403));
          }
        ),
      ],
    },
  },
};
