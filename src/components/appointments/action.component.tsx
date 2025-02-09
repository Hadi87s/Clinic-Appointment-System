import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";

import { Edit } from "@mui/icons-material";

interface ActionProps {
  id: number;
  currentNote?: string;
  currentStatus: string;
  onUpdate: (
    id: number,
    updatedData: { note?: string; status?: string }
  ) => void;
}

const Action: React.FC<ActionProps> = ({
  id,
  currentNote,
  currentStatus,
  onUpdate,
}) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState(currentNote || "");
  const [status, setStatus] = useState(currentStatus);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    onUpdate(id, { note, status });
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen} color="primary">
        <Edit />
      </IconButton>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Appointment</DialogTitle>
        <DialogContent>
          <TextField
            label="Note"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <TextField
            label="Status"
            select
            fullWidth
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Action;
