
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const APPOINTMENTS = [
  { id: 1, patientName: "John Doe", appointmentDate: "2025-02-10", status: "Pending" },
  { id: 2, patientName: "Jane Smith", appointmentDate: "2025-02-12", status: "Confirmed" },
  { id: 3, patientName: "Michael Johnson", appointmentDate: "2025-02-10", status: "Completed" },
];

const UpcomingAppointments = () => {
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
          {APPOINTMENTS.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.appointmentDate}</TableCell>
              <TableCell>{appointment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UpcomingAppointments;
