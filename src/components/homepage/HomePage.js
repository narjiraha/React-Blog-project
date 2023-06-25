import React, { useState } from "react";
import "./HomePage.css";
import newsData from "./HomePage.json";

const HomePage = () => {
  const [otherNews] = useState(newsData.otherNews);
  const [topStories] = useState(newsData.topStories);
  const [recentNews] = useState(newsData.recentNews);
  const [showMoreOtherNews, setShowMoreOtherNews] = useState(false);
  const [showMoreTopStories, setShowMoreTopStories] = useState(false);

  const handleReadMore = (url) => {
    window.open(url, "_blank");
  };

  const handleShowMoreOtherNews = () => {
    setShowMoreOtherNews(true);
  };

  const handleShowMoreTopStories = () => {
    setShowMoreTopStories(true);
  };

  return (
    <div>
      <div className="homeTop">
        {recentNews.slice(0, 3).map((item, i) => (
          <div className="" key={i}>
            <img src={item.urlToImage} alt="News Thumbnail" />
            <div className="text">
              <h3>{item.title}</h3>
              <p>{formatDate(item.publishedAt)}</p>
            </div>
            <button
              className="button"
              onClick={() => handleReadMore(item.url)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
      <div className="latestNews">
        <h4>The Latest</h4>
        <div className="latestNewsRow">
          {recentNews.slice(2, 6).map((item, i) => (
            <div className="" key={i}>
              <img src={item.urlToImage} alt="News Thumbnail" />
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{formatDate(item.publishedAt)}</p>
              </div>
              <button
                className="button"
                onClick={() => handleReadMore(item.url)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="homepage">
        <div className="left-section">
          <h2>Latest Articles</h2>
          {otherNews
            .slice(0, showMoreOtherNews ? otherNews.length : 10)
            .map((news, index) => (
              <div key={index} className="news-item">
                <img src={news.urlToImage} alt={news.title} />
                <div className="news-content">
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                  <p className="news-date">{formatDate(news.publishedAt)}</p>
                  <hr className="divider" />
                  <button
                    className="button"
                    onClick={() => handleReadMore(news.url)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          {!showMoreOtherNews && (
            <button
              className="read-more-news"
              onClick={handleShowMoreOtherNews}
            >
              Load More
            </button>
          )}
        </div>

        {/* advertising */}
        <div className="right-section">
          <div className="advertising-box">
            <h1>Advertising</h1>
          </div>

          <div className="right-section-two">
            <h2>Top Posts</h2>
            {topStories
              .slice(0, showMoreTopStories ? topStories.length : 5)
              .map((story, index) => (
                <div
                  key={index}
                  className={`news-item ${index === 0 ? "big-image" : ""}`}
                >
                  <img src={story.urlToImage} alt={story.title} />
                  <div className="news-content">
                    <h3>{story.title}</h3>
                    <p className="news-date">{formatDate(story.publishedAt)}</p>
                    <hr className="divider" />
                    <button
                      className="button"
                      onClick={() => handleReadMore(story.url)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            {!showMoreTopStories && (
              <button
                className="read-more-news"
                onClick={handleShowMoreTopStories}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>

      <h2>Latest Stories</h2>
      <div className="Latest-stories">
        <div className="latestNews">
          <div className="latestStoriesRow">
            {recentNews.slice(2, 6).map((item, i) => (
              <div className="" key={i}>
                <img src={item.urlToImage} alt="News Thumbnail" />
                <div className="text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{formatDate(item.publishedAt)}</p>
                </div>
                <button
                  className="button"
                  onClick={() => handleReadMore(item.url)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default HomePage;
