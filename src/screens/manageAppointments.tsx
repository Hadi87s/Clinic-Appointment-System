import { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import AppointmentsTable from "../components/appointments/appointmentsTable.component";
import SearchBar from "../components/appointments/searchBar.component";
import StatusFilter from "../components/appointments/statusFilter.component";
import useFilteredAppointments from "../hooks/useFilteredAppointments";

export interface Appointment {
  id: number;
  patientName: string;
  phoneNumber: string;
  age: number;
  gender: string;
  appointmentDate: string;
  status: string;
  note?: string;
}

// Mock Data
const APPOINTMENTS: Appointment[] = [
  {
    id: 1,
    patientName: "John Doe",
    phoneNumber: "+1234567890",
    age: 35,
    gender: "Male",
    appointmentDate: "2025-02-10",
    status: "Pending",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    phoneNumber: "+1987654321",
    age: 28,
    gender: "Female",
    appointmentDate: "2025-02-12",
    status: "Confirmed",
  },
  {
    id: 3,
    patientName: "Michael Johnson",
    phoneNumber: "+1122334455",
    age: 42,
    gender: "Male",
    appointmentDate: "2025-02-15",
    status: "Completed",
  },
  {
    id: 4,
    patientName: "Emily Davis",
    phoneNumber: "+1555666777",
    age: 30,
    gender: "Female",
    appointmentDate: "2025-02-18",
    status: "Pending",
  },
  {
    id: 5,
    patientName: "David Brown",
    phoneNumber: "+1666777888",
    age: 50,
    gender: "Male",
    appointmentDate: "2025-02-20",
    status: "Confirmed",
  },
];

const ManageAppointments: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [appointmentsData, setAppointmentsData] =
    useState<Appointment[]>(APPOINTMENTS);

  const filteredAppointments = useFilteredAppointments(
    appointmentsData,
    statusFilter,
    searchQuery
  );

  const handleUpdateAppointment = (
    id: number,
    updatedData: Partial<Appointment>
  ) => {
    setAppointmentsData((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, ...updatedData } : appointment
      )
    );
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: 2, mt: 4 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        padding="16px"
        border="1px solid #e0e0e0"
        borderBottom="transparent"
        borderRadius="8px 8px 0px 0px"
        bgcolor="#f5f5f5"
      >
        <Typography variant="h5" fontWeight="700" mb={1}>
          Appointments
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          width="100%"
          maxWidth="500px"
        >
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <StatusFilter
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </Stack>
      </Box>

      <Box sx={{ overflowX: "auto" }}>
        <AppointmentsTable
          appointments={filteredAppointments}
          onUpdateAppointment={handleUpdateAppointment} // Updated prop to handle both note and status updates
        />
      </Box>
    </Box>
  );
};

export default ManageAppointments;
