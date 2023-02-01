import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f779a46abc7045a3b687e23ba8e2df7c"
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({ articles: parseData.articles })
  }
  render() {
    return (
      <div className='conatiner my-3'>
        <h2>Today's Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 90)} urlToImage={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>
      </div>
    )
  }
}