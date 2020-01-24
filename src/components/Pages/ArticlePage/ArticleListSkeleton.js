import React from 'react';
import PropTypes from 'prop-types';

class ArticleList extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <a className="skeleton" href="/articles">
                        Carregando notícia...
                        <div className="skeleton" style={{ fontSize: '0.6em' }}>
                            Carregando descrição...
                        </div>
                    </a>
                </li>
                <li>
                    <a className="skeleton" href="/articles">
                        Carregando notícia...
                        <div className="skeleton" style={{ fontSize: '0.6em' }}>
                            Carregando descrição...
                        </div>
                    </a>
                </li>
                <li>
                    <a className="skeleton" href="/articles">
                        Carregando notícia...
                        <div className="skeleton" style={{ fontSize: '0.6em' }}>
                            Carregando descrição...
                        </div>
                    </a>
                </li>
            </ul>
        );
    }
}

ArticleList.propTypes = {
    article: PropTypes.array
};

export default ArticleList;