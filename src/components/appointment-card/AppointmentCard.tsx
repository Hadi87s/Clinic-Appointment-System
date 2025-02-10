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
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  console.log(appointment); //Todo: remove when done debugging

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-75 p-8 border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg shadow-blue-100 overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl"
    >
      <div className="flex flex-col space-y-4">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-semibold text-2xl md:text-3xl text-blue-800 mb-2 mt-5">
            Scheduled Appointment
          </h2>
          <p className="text-gray-600 text-lg">
            {"at "}
            {formatDate(appointment.bookedSlot)}
          </p>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize shadow-md ${
              appointment.status === AppointmentStatus.COMPLETED
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {appointment.status}
          </span>
        </div>

        {/* Symptoms Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="font-semibold text-blue-700">Symptoms:</p>
          <p className="text-gray-700">{appointment.symptoms}</p>
        </div>

        {/* Notes Section (Conditional) */}
        {appointment.notes && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold text-blue-700">Notes:</p>
            <p className="text-gray-700">{appointment.notes}</p>
          </div>
        )}

        {/* Cancel Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => onCancel(appointment.id)}
            className="cursor-pointer shadow-md bg-red-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:shadow-lg active:scale-95"
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AppointmentCard;
