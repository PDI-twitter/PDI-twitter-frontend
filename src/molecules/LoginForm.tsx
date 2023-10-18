import { useDispatch } from "react-redux";
import { TextInput } from "./TextInput";
import { useState } from "react";
import { finishLoading, loginSuccess, startLoading } from "../redux/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "../atoms/Button";
import { auth } from "../services/firebaseConfig";
import { Link } from "./Link";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";

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
      className="flex flex-col bg-white shadow-[10px_10px_40px_rgba(0,0,0,0.4)] gap-[5px] p-10 rounded-[7px] w-full sm:w-[380px]"
      onSubmit={handleSubmit}
    >
      <Title title={"Olá"} />
      <Subtitle subtitle="Digite os seus dados de acesso no campo abaixo." />
      <div className="space-y-4 mt-4">
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
      </div>
      <div className="mb-4">
        <Link label="Ainda não tem uma conta?" href="/register" />
      </div>
      <Button title="Acessar" variant="standart" fullWidth type="submit" />
    </form>
  );
};
