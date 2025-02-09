import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import dayjs from "dayjs";
import Action from "./action.component";

interface Appointment {
  id: number;
  patientName: string;
  phoneNumber: string;
  age: number;
  gender: string;
  appointmentDate: string;
  status: string;
  note?: string;
}

interface AppointmentsTableProps {
  appointments: Appointment[];
  onUpdateAppointment: (id: number, updatedData: Partial<Appointment>) => void; // Function to update appointment
}

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({
  appointments,
  onUpdateAppointment,
}) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "patientName",
      headerName: "Patient Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "appointmentDate",
      headerName: "Appointment Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <span>{dayjs(params.value).format("YYYY-MM-DD HH:mm:ss")}</span>
      ),
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
            params.value === "Pending"
              ? "info"
              : params.value === "Confirmed"
              ? "warning"
              : "success"
          }
        />
      ),
    },
    {
      field: "note",
      headerName: "Note",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => <span>{params.value || "No Notes"}</span>,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Action
          id={params.row.id}
          currentNote={params.row.note}
          currentStatus={params.row.status}
          onUpdate={onUpdateAppointment}
        />
      ),
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
