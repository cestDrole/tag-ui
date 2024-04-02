import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function PageSizeInput() {
  const minValue = 1;
  const maxValue = 100;
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    const newValue =
      e.target.value === ''
        ? ''
        : Math.min(Math.max(e.target.value, minValue), maxValue);
    setValue(newValue);
  };

  return (
    <TextField
      type="number"
      onChange={handleInput}
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputProps: {
          min: minValue,
          max: maxValue,
        },
      }}
      placeholder="1-100"
      variant="standard"
      size="small"
      id="standard-number"
      label="Page Size"
    />
  );
}
