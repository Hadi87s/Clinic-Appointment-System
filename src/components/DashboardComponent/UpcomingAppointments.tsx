
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { useAppointments } from "../../providers/appointmentsProvider";

const UpcomingAppointments = () => {
  const {state} = useAppointments();
  return (
    <TableContainer component={Paper} sx={{ border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ p: 2 }}>Upcoming Appointments</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.bookedSlot}</TableCell>
              <TableCell>{appointment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UpcomingAppointments;
