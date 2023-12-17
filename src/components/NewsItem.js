import React from 'react'

const NewsItem = (props) => {


    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className='pt-3' style={{ border: "1px solid", borderRadius: "10px", borderColor: "#ff5050" }}>


                <div className="card mx-3 " style={{border:"0" , backgroundColor:"#fff6f6"}}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge " style={{backgroundColor:"red"}} >{source}</span>
                    </div>
                    <img src={imgUrl ? imgUrl : "https://editorial.fxstreet.com/images/Breaking/breaking-news_Large.jpg"} className="card-img-top" style={{ height: '220px', border:"1px solid black" }} alt="NOT AVAILABLE" onError={(e) => {
                        e.target.src = 'https://editorial.fxstreet.com/images/Breaking/breaking-news_Large.jpg';
                    }} />
                    <div className="card-body">
                        <h6 className="card-title display-6 fs-5 fw-bold">{title}</h6>
                        <p className="card-text m-0 p-0 font-monospace">{description}</p>
                        <p className="card-text m-0 p-0"><small className="text-muted">By {author ? author : "Unknown"} </small></p>
                        <p className="card-text m-0 p-0 mb-3"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-danger btn-sm ">Read More</a>
                    </div>
                </div>
                </div>
            </div>
            )

}

            export default NewsItem
