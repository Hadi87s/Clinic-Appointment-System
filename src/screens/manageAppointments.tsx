import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import AppointmentsTable from "../components/appointments/appointmentsTable.component";
import SearchBar from "../components/appointments/searchBar.component";
import StatusFilter from "../components/appointments/statusFilter.component";
import useFilteredAppointments from "../hooks/useFilteredAppointments";
import { useAppointments } from "../providers/appointmentsProvider";
import { Appointment } from "../types/@types";
import { AppointmentActionKind } from "../reducer/appointmentsReducer";

const ManageAppointments: React.FC = () => {
  const { state, dispatch } = useAppointments();
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredAppointments = useFilteredAppointments(
    state.appointments,
    statusFilter,
    searchQuery
  );

  const handleUpdateAppointment = (id: string, updatedData: Partial<Appointment>) => {
    dispatch({ type: AppointmentActionKind.UPDATE, payload: { id, updatedData } });
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
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        </Stack>
      </Box>

      <Box sx={{ overflowX: "auto" }}>
        <AppointmentsTable appointments={filteredAppointments} onUpdateAppointment={handleUpdateAppointment} />
      </Box>
    </Box>
  );
};

export default ManageAppointments;
