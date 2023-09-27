import React, { useState } from "react"
import './index.css'
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { simulateLogin } from "../../services/simulateLogin"
import { useDispatch } from 'react-redux';
import { loginSuccess, startLoading, finishLoading } from "../../redux/authSlice"

const LoginPage: React.FC = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async () => {
        dispatch(startLoading())
        try {
            const res = await simulateLogin(true, 3000)
            dispatch(loginSuccess(res))
          } catch (error) {
              alert(error)
          } finally {
            dispatch(finishLoading())
          }
    }

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        login()
    }

    return (
    <div className="page">
        <form method="POST" className="formLogin" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <Input label="E-mail" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} type='email' />
            <Input label="Senha" name="password" value={password} onChange={(e) => setPassword(e.currentTarget.value) } type='password'/>
            <a href="/">Esqueci minha senha</a>
            <Button title="Acessar" variant="primary" fullWidth type="submit" />
        </form>
    </div>
)
}

export default LoginPage