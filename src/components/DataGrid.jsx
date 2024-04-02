import { useQuery } from '@tanstack/react-query';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress } from '@mui/material';

const GridData = () => {
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'NAME', flex: 2 },
    { field: 'count', headerName: 'COUNT', flex: 1 },
  ];

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch(
        'https://api.stackexchange.com/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow'
      ).then((res) => res.json()),
    queryKey: ['tags'],
  });

  // Show a loading message while data is fetching
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  const tags = response?.items;

  return (
    <div style={{ width: 'auto' }}>
      <DataGrid
        columns={columns}
        rows={tags.map((tag, index) => ({
          id: index + 1,
          name: tag.name,
          count: tag.count,
        }))}
        checkboxSelection
        autoHeight
        pageSizeOptions={[10, 25, 50, 100]}
        // hideFooterPagination
        // hideFooter
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
      />
    </div>
  );
};
export default GridData;
