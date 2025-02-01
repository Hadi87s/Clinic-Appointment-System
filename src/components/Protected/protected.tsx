import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Protected = (props: IProps) => {
  return <div>{props.children}</div>;
};

export default Protected;
