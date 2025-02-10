import { motion } from "framer-motion";
import "../App.css";
import AppointmentCard from "../components/appointment-card/AppointmentCard";
import { useAppointments } from "../providers/appointmentsProvider";
import { AppointmentActionKind } from "../reducer/appointmentsReducer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ViewAppointment = () => {
  const { state, dispatch } = useAppointments();

  const handleAppointmentCancellation = (id: string) => {
    dispatch({
      type: AppointmentActionKind.REMOVE,
      payload: { appointment: state.appointments[0], id },
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } },
      }}
      className="mt-7"
    >
      {!state.appointments.length ? (
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <span className="text-blue-900 text-2xl md:text-3xl font-[600] text-center">
            There are no Appointments at the moment.
          </span>
          <div className="w-64 h-64 -mt-8">
            <DotLottieReact
              src="https://lottie.host/b8d52863-0acd-4fef-ada3-0ea3245ef48c/iwxT93la0T.lottie"
              loop
              autoplay
              speed={2}
            />
          </div>
        </div>
      ) : (
        <div>
          {state.appointments.map((app) => (
            <AppointmentCard
              appointment={app}
              onCancel={handleAppointmentCancellation}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ViewAppointment;
