import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAuto = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);

  if (nameTrainer) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedAuto;
