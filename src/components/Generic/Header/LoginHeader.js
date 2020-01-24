import React from 'react';
import Logo from './Logo';
import { logIn } from '../../../actions';
import { tryLogin } from '../../../controllers/BobbaProxy';

const initialState = {
    username: '',
    password: '',
    rememberme: false,
    errorMessage: '',
    wrongPassword: false,
    wrongUsername: false,
};

class LoginHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { dispatch } = this.props;

        const wrongUsername = this.state.username === '';
        const wrongPassword = this.state.password === '';
        let errorMessage = '';

        if (wrongUsername) {
            errorMessage = 'Por favor, informe seu login e senha';
        } else if (wrongPassword) {
            errorMessage = 'Por favor, informe sua senha';
        }
        if (errorMessage === '') {
            tryLogin(this.state.username, this.state.password)
                .then(response => {
                    if (response.token != null) {
                        dispatch(logIn(response.token));
                    } else {
                        this.setState({
                            wrongUsername: false,
                            wrongPassword: true,
                            password: '',
                            errorMessage: 'A senha está incorreta'
                        });
                    }
                }).catch(err => {
                    this.setState({
                        errorMessage: 'Erro de conexão com o servidor'
                    });
                });
            //this.setState(initialState);
        } else {
            this.setState({
                wrongUsername, wrongPassword, errorMessage
            });
        }
    }

    getErrorSection(errorMessage) {
        return (
            <section className="login_error">
                {errorMessage}
            </section>
        );
    }

    render() {
        const { username, password, rememberme, errorMessage, wrongUsername, wrongPassword } = this.state;

        let errorContainer = null;
        if (errorMessage !== '') {
            errorContainer = this.getErrorSection(errorMessage);
        }

        let usernameClassName = wrongUsername ? 'wrong' : '';
        let passwordClassName = wrongPassword ? 'wrong' : '';

        return (
            <header>
                {errorContainer}
                <div className="header_container">
                    <Logo />
                    <form onSubmit={this.handleSubmit}>
                        <div className="input_group">
                            <label htmlFor="username">Usuario: </label>
                            <input id="username" name="username" type="text" aria-label="Usuario" placeholder="Usuario"
                                onChange={this.handleInputChange} value={username} className={usernameClassName} />
                        </div>
                        <div className="input_group">
                            <label htmlFor="password">Senha: </label>
                            <input id="password" name="password" type="password" aria-label="Contraseña"
                                placeholder="Contraseña" onChange={this.handleInputChange} value={password}
                                className={passwordClassName} />
                        </div>
                        <div className="input_group">
                            <input id="rememberme" name="rememberme" type="checkbox" onChange={this.handleInputChange} checked={rememberme} />
                            <label htmlFor="rememberme">Lembrar</label>
                            <input type="submit" value="Entrar" aria-label="Entrar" />
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default LoginHeader;