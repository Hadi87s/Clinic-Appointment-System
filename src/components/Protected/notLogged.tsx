import React, { useContext } from "react";
import "../../App.css";
import { authContext } from "../../providers/authProvider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface IProps {
  children: React.ReactNode;
}
const NotLogged = (props: IProps) => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <div>
      {user === null ? (
        <div className="container">
          You must be logged in to see this page
          <div>
            <Button variant="contained" onClick={() => navigate("/login")}>
              Go to login page
            </Button>
          </div>
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default NotLogged;
