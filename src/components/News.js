import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalArticles, settotalArticles] = useState(0);

    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {

        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        props.setProgress(50);
        //console.log(parsedData)

        setArticles(parsedData.articles);
        settotalArticles(parsedData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Newspedia`;
        updateNews();
        // eslint-disable-next-line
    }, [])



    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json()
        //console.log(parsedData)
        setArticles(articles.concat(parsedData.articles));
        settotalArticles(parsedData.totalResults);
       
    };



    return (
        <>
            <h1 className="text-center" style={{marginTop: '95px',marginBottom: '30px'}}>Newspedia - Top {capitalizeFirstLetter(props.category)}  Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles
                         .filter(element => element.urlToImage)
                         .map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>



        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'
}


News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
