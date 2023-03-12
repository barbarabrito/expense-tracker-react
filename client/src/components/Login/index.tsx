import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as C from './styles';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogin = async (e: any) => {

    e.preventDefault();

    if (email && password) {
      try {
        const isUserLogged = await auth.login(email, password);

        if (isUserLogged) {
          return navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <C.Container>
      <C.Form>
        <C.Wrapper>
          <C.Input name="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />

          <C.Input name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <C.Button
            type="submit"
            onClick={handleLogin}
          >
            Entrar
          </C.Button>
        </C.Wrapper>
      </C.Form>
    </C.Container>
  );
}