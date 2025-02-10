import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { Edit } from "@mui/icons-material";
import { AppointmentStatus } from "../../types/@types";
import CancelIcon from "@mui/icons-material/Cancel";

interface ActionProps {
  id: string;
  currentNote?: string;
  currentStatus: AppointmentStatus;
  onUpdate: (
    id: string,
    updatedData: { note?: string; status?: AppointmentStatus }
  ) => void;
}

const Action: React.FC<ActionProps> = ({
  id,
  currentNote,
  currentStatus,
  onUpdate,
}) => {
  const [note, setNote] = useState(currentNote || "");
  const [status, setStatus] = useState<AppointmentStatus>(currentStatus);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleSave = () => {
    onUpdate(id, { note, status });
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={handleOpen} color="primary">
        <Edit />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="edit-appointment-title"
        disableEnforceFocus={false}
      >
        <DialogTitle id="edit-appointment-title">Edit Appointment</DialogTitle>
        <DialogContent>
          <TextField
            id="note-field"
            label="Note"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <TextField
            id="status-field"
            label="Status"
            select
            fullWidth
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value as AppointmentStatus)}
          >
            <MenuItem value={AppointmentStatus.PENDING}>Pending</MenuItem>
            <MenuItem value={AppointmentStatus.CONFIRMED}>Confirmed</MenuItem>
            <MenuItem value={AppointmentStatus.COMPLETED}>Completed</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              color="error"
              startIcon={<CancelIcon />}
              onClick={handleClose}
              sx={{ textTransform: "capitalize", borderRadius: "8px" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              sx={{
                textTransform: "capitalize",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              Save
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Action;
