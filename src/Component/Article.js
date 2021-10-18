import React from 'react'

function Article({ data }) {
    return (
        <div className="News">
            <h4 className="NewsTitle">{data.title}</h4>
            <span className="NewsAuthor">{data.author}</span> <br />
            <span className="NewsPublished">{data.publishedAt}</span>
            <span className="NewsSource">{data.source.name}</span>
            <p className="NewsDesc">{data.description}</p>
            <div className="ReadMore">
                <a href={data.url}><button>Read More</button></a>
            </div>
        </div>
    )
}

export default Article
