import React, { useState } from "react";
import "./index.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  startLoading,
  finishLoading,
} from "../../redux/authSlice";
import { auth } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = {
          id: userCredential.user.uid,
          name: userCredential.user.displayName ?? userCredential.user.email,
          email: userCredential.user.email,
          accessToken: await userCredential.user.getIdToken(),
          refreshToken: userCredential.user.refreshToken,
        };
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode: ${errorCode}`);
        console.log(`errorMessage: ${errorMessage}`);
        if (errorCode === "auth/invalid-login-credentials") {
          alert("Invalid credentials");
        }
      })
      .finally(() => {
        dispatch(finishLoading());
      });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="page">
      <form method="POST" className="formLogin" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <Input
          label="E-mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="email"
        />
        <Input
          label="Senha"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          type="password"
        />
        <a href="/">Esqueci minha senha</a>
        <Button title="Acessar" variant="primary" fullWidth type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
