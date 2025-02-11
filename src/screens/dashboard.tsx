import { Container, Typography, Box } from "@mui/material";
import StatisticsCards from "../components/DashboardComponent/StatisticsCards";
import UpcomingAppointments from "../components/DashboardComponent/UpcomingAppointments";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } },
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dashboard
        </Typography>

        <StatisticsCards />

        <Box sx={{ mt: 4, mb: 4 }}>
          <UpcomingAppointments />
        </Box>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
