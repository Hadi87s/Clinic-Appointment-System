import { Appointment, AppointmentStatus } from "../../types/@types";
import { motion } from "framer-motion";
import { formatDate } from "../../utils/formatDate";

interface IProps {
  appointment: Appointment;
  onCancel: (appointmentId: string) => void;
}

const AppointmentCard = (props: IProps) => {
  const { appointment, onCancel } = props;

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-blue-100 rounded-lg shadow-lg overflow-hidden mb-6 transform transition-all duration-200 hover:shadow-xl hover:bg-blue-50"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-2 capitalize">
          {appointment.patientName}
        </h2>
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Contact:</span>{" "}
            {appointment.contact}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {appointment.age}
          </p>
          <p>
            <span className="font-semibold capitalize">Gender:</span>{" "}
            <span className="capitalize">{appointment.gender}</span>
          </p>
          <p>
            <span className="font-semibold">Booked Slot:</span>{" "}
            {formatDate(appointment.bookedSlot)}
          </p>
          <p>
            <span className="font-semibold">Symptoms:</span>{" "}
            {appointment.symptoms}
          </p>
          <p className="absolute top-4 right-3">
            <span
              className={`px-3 py-2 rounded-full text-sm capitalize ${
                appointment.status === AppointmentStatus.COMPLETED
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {appointment.status}
            </span>
          </p>
          {appointment.notes && (
            <p>
              <span className="font-semibold">Notes:</span> {appointment.notes}
            </p>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onCancel(appointment.id)}
            className="cursor-pointer border-2 bg-red-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-100 hover:text-red-700 hover:border-red-700"
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AppointmentCard;
