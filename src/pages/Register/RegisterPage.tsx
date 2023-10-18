import React from "react";
import { RegisterForm } from "../../molecules/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center w-full h-screen bg-[#1DA1F2]">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
