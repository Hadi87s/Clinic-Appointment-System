import { Container, Typography, Box } from "@mui/material";
import StatisticsCards from "../components/DashboardComponent/StatisticsCards";
import UpcomingAppointments from "../components/DashboardComponent/UpcomingAppointments";


const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>

      <StatisticsCards />

      <Box sx={{ mt: 4 }}>
        <UpcomingAppointments />
      </Box>
    </Container>
  );
};

export default Dashboard;
