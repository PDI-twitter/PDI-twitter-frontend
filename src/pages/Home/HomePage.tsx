import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { AuthState, logout } from "../../redux/authSlice";
import { useSelector } from "react-redux";

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
        variant="outlined"
        onClick={() => dispatch(logout())}
      />
    </div>
  );
};

export default HomePage;
