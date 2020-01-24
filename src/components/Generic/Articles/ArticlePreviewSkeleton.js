import React from 'react';

class ArticlePreviewSkeleton extends React.Component {
    render() {
        return (
            <section className="news_preview skeleton">
                <div className="img"></div>
                <div>
                    <h2>
                        Tentando carregar um título longo típico ..
                    </h2>
                    <p>
                        E tem a descrição
                    </p>
                    <span>E o link</span>
                </div>
            </section>
        );
    }
}

export default ArticlePreviewSkeleton;