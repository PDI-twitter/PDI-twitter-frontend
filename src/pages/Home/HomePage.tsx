import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { AuthState, logout } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: { auth: AuthState }) => state.auth.user);

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">HOME PAGE</div>
    </>
  );
};

export default HomePage;
