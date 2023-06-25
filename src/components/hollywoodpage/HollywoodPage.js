import React, { useEffect, useState } from "react";
import "./HollywoodPage.css";
import HollywoodData from "./HollywoodPage.json";

const HollywoodPage = () => {
  const [HollywoodNews, setHollywoodNews] = useState([]);
  const [numToShow, setNumToShow] = useState(10);
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    setHollywoodNews(HollywoodData);
    fetchTopNews();
  }, []);

  const fetchTopNews = () => {
    const topNewsData = [
      {
        "title": "Apoorva Lakhia on RC's mysterious behaviour",
        "description": "In a recent interview, director Apoorva Lakhia, known for the film 'Zanjeer,' discussed his friendship with actor Ram Charan, who made his Hollywood debut in the same film. Despite the box office failure of 'Zanjeer,' Lakhia revealed that he and Ram Charan ha…",
        "url": "https://timesofindia.indiatimes.com/entertainment/telugu/movies/news/zanjeer-director-apoorva-lakhia-sheds-light-on-ram-charans-mysterious-behaviour-he-doesnt-pick-up-my-phone-calls/articleshow/100623267.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-100623378,width-1070,height-580,imgsize-34008,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      },
      {
        "title": "Disha Patani's gym pics will make you sweat",
        "description": "Disha Patani is one of the fittest actresses in Hollywood. A look into her workout sessions that will surely make you sweat.",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/web-stories/disha-patanis-workout-pictures-that-will-make-you-sweat/photostory/100629387.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-100629395,imgsize-69610,width-900,height-1200,resizemode-6/100629395.jpg",
      },
      {
        "title": "From ticket collector to trophy collector: What is MS Dhoni's one-line mantra for success?",
        "description": "MS Dhoni, in a cricketing career spanning two decades, has been India's most successful skipper and even after retiring from international cricket in 2020 has had a glorious Indian summer still playing the IPL.",
        "url": "https://economictimes.indiatimes.com/news/india/from-ticket-collector-to-trophy-collector-ms-dhonis-one-line-mantra-for-success/articleshow/100623973.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-100624615,width-1070,height-580,imgsize-72578,overlay-economictimes/photo.jpg",
      },
      {
        "title": "Temple run: Sara Ali Khan offers prayer at Mahakaleshwar shrine in Ujjain",
        "description": "Hollywood actress Sara Ali Khan visited Mahakaleshwar Temple in Ujjain, Madhya Pradesh, to participate in the famous 'Bhasma Aarti' ritual. She wore a magenta-pink saree, following the temple's dress code for the ritual, and performed 'Jalabhishek'.",
        "url": "https://economictimes.indiatimes.com/magazines/panache/temple-run-sara-ali-khan-offers-prayer-at-mahakaleshwar-shrine-in-ujjain/articleshow/100638154.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-100638804,width-1070,height-580,imgsize-40304,overlay-etpanache/photo.jpg",
      },
      {
        "title": "10 months after 'Laal Singh Chaddha' tanked at box-office, Aamir Khan not 'emotionally ready' for new film",
        "description": "Aamir Khan, Hollywood's superstar, has stated that he is not \"emotionally ready\" to work in his next film yet. Following the weak response to his latest film, 'Laal Singh Chaddha,' the actor decided to take a break from acting to prioritise his family.",
        "url": "https://economictimes.indiatimes.com/magazines/panache/10-months-after-laal-singh-chaddha-tanked-at-box-office-aamir-khan-not-emotionally-ready-for-new-film/articleshow/100637104.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-100637751,width-1070,height-580,imgsize-40850,overlay-etpanache/photo.jpg",
      }
    ];
    setTopNews(topNewsData);
  };

  const handleReadMore = (url) => {
    window.open(url, "_blank");
  };

  const handleLoadMore = () => {
    setNumToShow(numToShow + 10);
  };

  return (
    <div className="Hollywood-page">
      <div className="Hollywood-news-container">
        <div className="Hollywood-news-section-left-container">
          <h2>Hollywood News</h2>
          {HollywoodNews && HollywoodNews.length > 0 ? (
            HollywoodNews.slice(0, 13).map((news, index) => (
              <div key={index} className="news-item">
                {news.urlToImage && (
                  <img src={news.urlToImage} alt={news.title} />
                )}
                <div className="news-content">
                  <h3>{news.title}</h3>
                  <p className="news-date">{news.publishedAt}</p>
                  <p dangerouslySetInnerHTML={{ __html: news.description }} />
                  <button
                    className="button"
                    onClick={() => handleReadMore(news.url)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No Hollywood news found.</p>
          )}
          {HollywoodNews.length > numToShow && (
            <button className="read-more-news" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </div>

      {/* Top News Section */}
      <div className="top-news-section-right-container">
        <h2>Top News</h2>
        {topNews && topNews.length > 0 ? (
          topNews.map((news, index) => (
            <div key={index} className="news-item">
              <div className="news-content">
                <h3>{news.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: news.description }} />
                <img src={news.urlToImage} />
                <button
                  className="button"
                  onClick={() => handleReadMore(news.url)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No top news found.</p>
        )}
        <div className="advertising">
          <h1>Advertising</h1>
        </div>
      </div>
    </div>
  );
};

export default HollywoodPage;
