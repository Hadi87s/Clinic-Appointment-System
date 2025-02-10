import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import dayjs from "dayjs";
import Action from "./action.component";
import { Appointment, AppointmentStatus } from "../../types/@types";

interface AppointmentsTableProps {
  appointments: Appointment[];
  onUpdateAppointment: (id: string, updatedData: Partial<Appointment>) => void; // Function to update appointment
}

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({
  appointments,
  onUpdateAppointment,
}) => {
  const columns: GridColDef[] = [
    {
      field: "patientName",
      headerName: "Patient Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "contact",
      headerName: "Phone Number",
      flex: 1,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.75,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "bookedSlot",
      headerName: "Appointment Date",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <span>{dayjs(params.value).format("YYYY-MM-DD HH:mm")}</span>
      ),
    },
    {
      field: "symptoms",
      headerName: "Symptoms",
      flex: 1,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "note",
      headerName: "Notes",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => <span>{params.value || "No Notes"}</span>,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === AppointmentStatus.PENDING
              ? "info"
              : params.value === AppointmentStatus.CONFIRMED
              ? "warning"
              : "success"
          }
        />
      ),
      sortable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.75,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Action
          id={params.row.id}
          currentNote={params.row.notes}
          currentStatus={params.row.status}
          onUpdate={onUpdateAppointment}
        />
      ),
      sortable: false,
    },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={appointments}
      getRowId={(row) => row.id}
      pagination
      initialState={{
        pagination: {
          paginationModel: { pageSize: 8, page: 0 },
        },
      }}
      pageSizeOptions={[8, 16, 32, 64]}
      disableColumnFilter
      disableDensitySelector
      disableColumnMenu
      disableRowSelectionOnClick
      disableColumnResize
      sx={{ minHeight: 400 }}
    />
  );
};

export default AppointmentsTable;
