import React, { useState } from "react"
import './index.css'
import Input from "../../components/Input/Input"

const LoginPage: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return <div className="page">
    <form method="POST" className="formLogin">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <Input label="E-mail" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} type='email' />
        <Input label="Senha" name="password" value={password} onChange={(e) => setPassword(e.currentTarget.value) } type='password'/>
        <a href="/">Esqueci minha senha</a>
        <input type="submit" value="Acessar" className="btn" />
    </form>
</div>
}

export default LoginPage