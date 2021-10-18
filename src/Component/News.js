import React, { useContext } from 'react'
import { NewsApi } from '../API/NewsApi';
import Article from './Article'

function News(props) {
    const { data } = useContext(NewsApi);

    return (
        <div>
            <h1 className="Header">News App In Indonesia</h1>
            <div className="AllNews">
                {data
                    ? data.articles.map((news) => (
                        <Article data={news} key={news.url} />
                    ))
                    : "Loading"}
            </div>
        </div>
    )
}

export default News
