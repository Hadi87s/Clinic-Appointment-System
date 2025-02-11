import React, { useContext } from "react";
import { authContext } from "../../providers/authProvider";
import { Role } from "../../types/@types";

interface IProps {
  children: React.ReactNode;
  role: Role;
}

const Protected = (props: IProps) => {
  const { user } = useContext(authContext);

  return (
    <div>
      {user?.role === props.role ? (
        props.children
      ) : (
        <div className="flex justify-center items-center h-[80vh] ">
          <div className="flex flex-col text-center p-8 ">
            <img src="../../../public/Shield.svg" alt="shield" />
            <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
              Access Denied
            </h2>
            <p className="text-gray-700 mb-2">
              You do not have the necessary permissions to view this page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Protected;
