import TextField from '@mui/material/TextField';
import { usePageSizeStore } from '../store';

export default function PageSizeInput() {
  const minValue = 1;
  const maxValue = 100;
  const pageSize = usePageSizeStore((state) => state.pageSize);
  const setPageSize = usePageSizeStore((state) => state.setPageSize);

  const handleInput = (e) => {
    const newValue =
      e.target.value === ''
        ? ''
        : Math.min(Math.max(e.target.value, minValue), maxValue);
    setPageSize(newValue);
  };

  return (
    <TextField
      type='number'
      onChange={handleInput}
      value={pageSize}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputProps: {
          min: minValue,
          max: maxValue,
        },
      }}
      placeholder='1-100'
      variant='standard'
      size='small'
      id='standard-number'
      label='Page Size'
    />
  );
}
