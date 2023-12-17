import React from 'react'

const NewsItem = (props) => {


    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card mx-3">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge bg-danger" >{source}</span>
                </div>
                <img src={imgUrl ? imgUrl : "https://editorial.fxstreet.com/images/Breaking/breaking-news_Large.jpg"} className="card-img-top" style={{ height: '220px' }} alt="NOT AVAILABLE" onError={(e) => {
                    e.target.src = 'https://editorial.fxstreet.com/images/Breaking/breaking-news_Large.jpg';
                }} />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text m-0 p-0">{description}</p>
                    <p className="card-text m-0 p-0"><small className="text-muted">By {author ? author : "Unknown"} </small></p>
                    <p className="card-text m-0 p-0 mb-3"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
