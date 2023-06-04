
import React from "react";
import AddBookMark from "./Bookmarks/AddBookMark";
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.fetchNews(this.props.newsName);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.newsName !== this.props.newsName) {
      this.fetchNews(this.props.newsName);
    }
  }

  fetchNews = async (query) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=39c3025e706146f99c1db7b6e2295f6e&pageSize=6`
      );
      const data = await response.json();
      const articles = data.articles;
      this.setState({ articles });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { articles } = this.state;

    return (
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
        {articles.map((article) => (
          <div key={article.title} className="p-8">
            {/* Your news article rendering logic */}
            <img src={article.urlToImage} alt={article.title} />
            <h3 className="h5">{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} className="h5">Read more</a>
            <div class="px-1 pt-4 pb-2">
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#News</span>
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Trending</span>
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Latest</span>
               <AddBookMark articleTitle={article.title} articleUrl={article.url}/>
             </div>
            

          </div>
        ))}
      </div>
    );
  }
}

export default News;