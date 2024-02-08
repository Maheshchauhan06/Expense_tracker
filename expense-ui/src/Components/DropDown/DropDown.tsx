import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface optionsObj {
  type: string;
  id: number;
}

interface DropDownProps {
  options?: optionsObj[] | undefined;
  label: string;
  value: string;
  handleChange: (e: any) => void;
}

export default function BasicSelect({
  options,
  label,
  value,
  handleChange,
}: DropDownProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {options?.map((option, index) => {
            return (
              <MenuItem key={index} value={option.id}>
                {option.type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
