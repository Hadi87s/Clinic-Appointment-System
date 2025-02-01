import React, { useContext } from "react";
import { authContext } from "../../providers/authProvider";
import { Role } from "../../types/@types";
import "../../App.css";
interface IProps {
  children: React.ReactNode;
}

const Protected = (props: IProps) => {
  const { user } = useContext(authContext);

  return (
    <div>
      {user?.role === Role.doctor ? (
        props.children
      ) : (
        <div className="container">
          You have no authorization to see this page
        </div>
      )}
    </div>
  );
};

export default Protected;
