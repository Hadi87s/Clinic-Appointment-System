import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface StatusFilterProps {
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  statusFilter,
  setStatusFilter,
}) => (
  <FormControl sx={{ width: 200 }} size="small">
    <InputLabel>Status Filter</InputLabel>
    <Select
      label="Status Filter"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
    >
      <MenuItem value="All">All</MenuItem>
      <MenuItem value="pending">Pending</MenuItem>
      <MenuItem value="confirmed">Confirmed</MenuItem>
      <MenuItem value="completed">Completed</MenuItem>
    </Select>
  </FormControl>
);

export default StatusFilter;
