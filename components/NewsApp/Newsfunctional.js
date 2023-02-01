import React, { useState } from 'react'
import { useEffect } from 'react';
import NewsItem from './NewsItem';

export default function Newsfunctional() {
    const [News, setNews] = useState([])
    let GetNews = async () => {
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e"
        let data = await fetch(url)
        let parseData = await data.json()
        setNews(parseData.articles)
    }
    useEffect(() => {
        GetNews()
    })
    return (
        <div className='conatiner my-3'>
            <h2>Today's Top headlines</h2>
            <div className="row">
                {News.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 80)} urlToImage={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}

            </div>
        </div>
    );
}
