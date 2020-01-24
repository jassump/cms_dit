import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <>
                <h1 className="blue">Bem vindo ao DIT</h1>
                <p>
                    <img alt="Te damos la bienvenida" src="/web-gallery/images/welcome_frank.png" />
                </p>
                <p>
                Você está prestes a entrar em um lugar incrível, onde compartilhará novas experiências enquanto
                Você conhecerá novas pessoas de todos os lugares. Veja onde você vê ... A diversão nunca acaba!
                </p>
            </>
        );
    }
}

export default Welcome;