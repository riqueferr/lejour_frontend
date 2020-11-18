import React from 'react';
import ImageLogo from '../images/logo-goiaba_(1).png';


function Login() {
    return (
        <div className="container">
            <div className="caixa">
                <img src={ImageLogo} />
                <div className="form">
                    <form>
                        <input type="email" id="email" name="email" placeholder="Email" /><br />
                        <input type="password" id="senha" name="senha" placeholder="Senha" /><br />
                        <a href="/">
                            <button type="button" className="btn">Entrar</button>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default Login;




