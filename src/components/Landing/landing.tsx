import { Link } from "react-router-dom";
import "../../App.css";
const Landing = () => {
  return (
    <div
      className="w-[100%] h-[100vh] absolute inset-0"
      style={{
        backgroundImage: `url(${"../../../public/landingBackground.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row">
        <div className="title mt-[250px] ml-15">
          <h1 className="text-7xl text-gray-800 mb-5">
            Your Health, Our Priority
          </h1>
          <p className="text-2xl text-gray-700 max-w-2xl ml-5">
            Book your clinic appointments effortlessly. With a few clicks,
            schedule, manage, and view your appointments anytime, anywhere.
          </p>
          <div className="flex justify-center max-w-2xl mt-10">
            <Link
              to="/create-appointment"
              className="p-4 bg-blue-600 text-gray-50 rounded-2xl outline-2 outline-white"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
        <div
          className="hidden lg:block w-[500px] h-[730px]"
          style={{
            backgroundImage: `url(${"../../../public/doctor.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="doctorImage"></div>
    </div>
  );
};

export default Landing;
