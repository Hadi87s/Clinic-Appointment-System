import { Card, CardContent, Typography, Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const APPOINTMENTS = [
  { id: 1, appointmentDate: "2025-02-10", status: "Pending" },
  { id: 2, appointmentDate: "2025-02-12", status: "Confirmed" },
  { id: 3, appointmentDate: "2025-02-10", status: "Completed" },
  { id: 4, appointmentDate: "2025-02-10", status: "Pending" },
  { id: 5, appointmentDate: "2025-02-10", status: "Confirmed" },
];

const today = "2025-02-10";
const todayAppointments = APPOINTMENTS.filter((a) => a.appointmentDate === today);
const pendingAppointments = todayAppointments.filter((a) => a.status === "Pending").length;
const confirmedAppointments = todayAppointments.filter((a) => a.status === "Confirmed").length;

const appointmentsPerDay = APPOINTMENTS.reduce((acc, appointment) => {
  acc[appointment.appointmentDate] = (acc[appointment.appointmentDate] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const chartData = Object.entries(appointmentsPerDay).map(([date, count]) => ({
  date,
  count,
}));

const StatisticsCards = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 3,
        mt: 2,
      }}
    >
      {/* Total Appointments Today Card */}
      <Card sx={{ 
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        height: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
        }
      }}>
        <CardContent sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
            Total Appointments Today
          </Typography>
          <Typography 
            variant="h1" 
            color="primary" 
            sx={{ 
              fontSize: "5rem",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #2196F3, #1976d2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {todayAppointments.length}
          </Typography>
        </CardContent>
      </Card>

      {/* Pending vs Confirmed Section inside one Card */}
      <Card sx={{ 
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        height: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
        }
      }}>
        <CardContent sx={{ textAlign: "center", width: "100%" }}>
          <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
            Pending vs Confirmed
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
            {/* Pending Card */}
            <Card sx={{ 
              width: "45%",
              border: "1px solid #fff3e0",
              borderRadius: 2,
              height: 120,
              backgroundColor: "#fff8e1",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              }
            }}>
              <CardContent sx={{ 
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%"
              }}>
                <Typography variant="h6" color="warning.main" sx={{ mb: 1 }}>
                  Pending
                </Typography>
                <Typography variant="h3" color="warning.dark">
                  {pendingAppointments}
                </Typography>
              </CardContent>
            </Card>

            {/* Confirmed Card */}
            <Card sx={{ 
              width: "45%",
              border: "1px solid #e8f5e9",
              borderRadius: 2,
              height: 120,
              backgroundColor: "#f1f8e9",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              }
            }}>
              <CardContent sx={{ 
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%"
              }}>
                <Typography variant="h6" color="success.main" sx={{ mb: 1 }}>
                  Confirmed
                </Typography>
                <Typography variant="h3" color="success.dark">
                  {confirmedAppointments}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>

      {/* Appointments Per Day Chart */}
      <Card sx={{ 
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        height: 250,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
        }
      }}>
        <CardContent>
          <Typography variant="h6" textAlign="center" sx={{ mb: 2, color: "text.secondary" }}>
            Appointments Per Day
          </Typography>
          <Box sx={{ height: 150 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1976d2" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StatisticsCards;