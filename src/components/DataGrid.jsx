import { useQuery } from '@tanstack/react-query';
import { DataGrid } from '@mui/x-data-grid';

const GridData = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'NAME', width: 150 },
    { field: 'count', headerName: 'COUNT', width: 120 },
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
    return <h2>Loading...</h2>;
  }

  // to handle error
  if (error) {
    return <div className='error'>Error: error fetching</div>;
  }

  const tags = response?.items;

  return (
    <div style={{ height: 800, width: '30%' }}>
      <DataGrid
        columns={columns}
        rows={tags.map((tag, index) => ({
          id: index + 1,
          name: tag.name,
          count: tag.count,
        }))}
        pageSize={10}
        checkboxSelection
        showPagination={true}
        pageSizeOptions={[5, 10, 25]}
        autoPageSize
      />
    </div>
  );
};
export default GridData;
