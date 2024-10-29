import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from '@mui/material';

function CustomDatePicker({ selectedDate, setSelectedDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic date picker"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        sx={{height:"10px",width:"340px",padding:"none",}}
        renderInput={(params) => (
          <TextField 
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
