import { useDispatch } from "react-redux";
import { TextInput } from "../TextInput";
import { useState } from "react";
import {
  finishLoading,
  loginSuccess,
  startLoading,
} from "../../redux/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "../Button/Button";
import { auth } from "../../services/firebaseConfig";
import { Link } from "../Link";
import { LoginFormSubtitle } from "./LoginFormSubtitle";
import { LoginFormTitle } from "./LoginFormTitle";

type LoginFormProps = {};

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
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
    <form
      method="POST"
      className="flex flex-col bg-white shadow-[10px_10px_40px_rgba(0,0,0,0.4)] gap-[5px] p-10 rounded-[7px]"
      onSubmit={handleSubmit}
    >
      <LoginFormTitle title={"Login"} />
      <LoginFormSubtitle subtitle="Digite os seus dados de acesso no campo abaixo." />
      <TextInput
        label="E-mail"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        type="email"
      />
      <TextInput
        label="Senha"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        type="password"
      />
      <Link label="Esqueci minha senha" href="/" />
      <Button title="Acessar" variant="standart" fullWidth type="submit" />
    </form>
  );
};
