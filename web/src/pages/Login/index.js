import React, {useState} from 'react';
import Header from '../../components/Header';

import api from '../../services/api';

const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    })

    const login = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario));
            window.location.reload();
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div 
            className="container-fluid bg_filmes"
            style={{
                position: 'fixed',
                height: '100%'
            }}
        >
            <Header hideMenu />
            <div id="caixa_login" className="col-4 offset-4">
                <h1 className="text-white">Entrar</h1>
                <br />
                <form>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email ou número de telefone"
                        onChange={(e) => {
                            setCredenciais ({
                            ...credenciais,
                            email: e.target.value})
                        }}
                    />
                    <br />
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Senha"
                    />
                    <br />
                    <button className="btn btn-lg btn-block btn-danger" onClick={login}>Entrar</button>
                    <div className="row mt-4">
                        <div className="col text-muted">
                            <input type="checkbox" /> Lembrar de mim.
                        </div>
                        <div className="col pAjuda ">
                            <a className="text-muted text-right" href="#">Precisa de ajuda?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;