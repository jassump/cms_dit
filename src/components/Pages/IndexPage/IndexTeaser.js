import React from 'react';
import { Link } from 'react-router-dom';

class IndexTeaser extends React.Component {
    render() {
        return (
            <section className="news_preview">
                <img alt="Bem vindo ao dit" src="/web-gallery/images/habbos.gif" />
                <div>
                    <h2>
                        Faça amigos e divirta-se!
                    </h2>
                    <p>
                        
                        Você está prestes a entrar em um lugar incrível, onde compartilhará novas experiências enquanto
                        voce vai conhecer
                        Pessoas novas de todos os lugares. Veja onde você vê ... A diversão nunca acaba!
                    </p>
                    <Link to="/register">
                        <button>
                            Registrar
                        </button>
                    </Link>
                </div>
            </section>
        );
    }
}

export default IndexTeaser;