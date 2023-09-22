import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { AuthState, logout } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { IUser } from "../../models/user";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: { auth: AuthState }) => state.auth.user);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{user?.name}</h2>
      <h2>{user?.email}</h2>
      <Button
        title="Logout"
        variant="primary"
        onClick={() => dispatch(logout())}
      />
    </div>
  );
};

export default HomePage;
