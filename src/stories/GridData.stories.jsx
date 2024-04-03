import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GridData from '../components/DataGrid';

const queryClient = new QueryClient();

export default {
  title: 'GridData',
  component: GridData,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

const Template = (args) => <GridData {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  queryClient: {
    queryKey: ['tags'],
    isLoading: false,
    isError: false,
  },
};

export const Loading = Template.bind({});
Loading.args = {};
Loading.parameters = {
  queryClient: {
    queries: [
      {
        queryKey: ['tags'],
        isLoading: true,
        isError: false,
      },
    ],
  },
};

export const Error = Template.bind({});
Error.args = {};
Error.parameters = {
  queryClient: {
    queries: [
      {
        queryKey: ['tags'],
        isError: true,
        isLoading: false,
      },
    ],
  },
};
