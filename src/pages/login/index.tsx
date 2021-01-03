import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthenticationService } from '../../services/authentication';
import { Container, Form, Input, Title, Button } from './style';

const Login: React.FC = () => {

    const [status, setStatus] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [conta, setConta] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const authService = new AuthenticationService();

    async function handleSubmit(event: any) {
        event.preventDefault();
        await authService.login(conta, senha);
        history.push('/home');
    }
    
    return (
        <Container>
            <Form method='post'>
                <Title>Login</Title>
                <Input name='conta' onChange={(e) => setConta(e.target.value)} type='email' placeholder='Email'/>
                <Input name='senha' onChange={(e) => setSenha(e.target.value)} type='password' placeholder='Senha'/>
                <Button onClick={(e) => handleSubmit(e)}>Entrar</Button>
            </Form>
        </Container>
    )
}

export default Login;
