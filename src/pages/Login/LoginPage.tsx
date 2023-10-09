import React, { useState } from "react";
import { LoginForm } from "../../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center w-full h-screen bg-[#1DA1F2]">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
