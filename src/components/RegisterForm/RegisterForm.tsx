import { useDispatch } from "react-redux";
import { TextInput } from "../TextInput";
import { useState } from "react";
import {
  finishLoading,
  loginSuccess,
  startLoading,
} from "../../redux/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../Button/Button";
import { auth } from "../../services/firebaseConfig";
import { Link } from "../Link/Link";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { useNavigate } from "react-router-dom";

type RegisterFormProps = {};

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    dispatch(startLoading());
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = {
          id: userCredential.user.uid,
          name: userCredential.user.displayName ?? userCredential.user.email,
          email: userCredential.user.email,
          accessToken: await userCredential.user.getIdToken(),
          refreshToken: userCredential.user.refreshToken,
        };
        dispatch(loginSuccess(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode: ${errorCode}`);
        console.log(`errorMessage: ${errorMessage}`);
      })
      .finally(() => {
        dispatch(finishLoading());
      });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <form
      method="POST"
      className="flex flex-col bg-white shadow-[10px_10px_40px_rgba(0,0,0,0.4)] gap-[5px] p-10 rounded-[7px] w-full sm:w-[380px]"
      onSubmit={handleSubmit}
    >
      <Title title={"Cadastro"} />
      <Subtitle subtitle="Insira seus dados para se cadastrar." />
      <div className="space-y-4 mt-4">
        <TextInput
          label="Nome"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
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
        <Link label="Já tem uma conta? Entrar" href="/" />
      </div>

      <Button title="Acessar" variant="standart" fullWidth type="submit" />
    </form>
  );
};
