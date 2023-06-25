import React, { useEffect, useState } from "react";
import "./TechnologyPage.css";
import TechnologyData from "./TechnologyPage.json";

const TechnologyPage = () => {
  const [TechnologyNews, setTechnologyNews] = useState([]);
  const [numToShow, setNumToShow] = useState(10);
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    setTechnologyNews(TechnologyData);
    fetchTopNews();
  }, []);

  const fetchTopNews = () => {
    const topNewsData = [
      {
        "title": "US, Japan modernising military alliance: Austin",
        "description": "Tokyo (AFP) June 1, 2023\n\n\n The United States and Japan are working to modernise their military alliance in the face of threats from China, North Korea and Russia, US Defence Secretary Lloyd Austin said Thursday. \n\nAustin is in Tokyo on a brief trip for bilat…",
        "url": "https://www.spacewar.com/reports/US_Japan_modernising_military_alliance_Austin_999.html",
        "urlToImage": "https://www.spxdaily.com/images-hg/us-japan-flag-600-hg.jpg",
      },
      {
        "title": "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister says",
        "description": "Seoul (AFP) June 1, 2023\n\n\n North Korean leader Kim Jong Un's powerful sister said Thursday that Pyongyang would \"correctly\" place a spy satellite into orbit soon, a day after their first attempt crashed. \n\nPyongyang has pitched its military satellite as a ne…",
        "url": "https://www.spacewar.com/reports/N_Korea_will_correctly_put_spy_satellite_into_orbit_soon_Kims_sister_says_999.html",
        "urlToImage": "https://www.spxdaily.com/images-hg/korea-kim-sister-marker-hg.jpg",
      },
      {
        "title": "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister says",
        "description": "Seoul (AFP) June 1, 2023\n\n\n North Korean leader Kim Jong Un's powerful sister said Thursday that Pyongyang would \"correctly\" place a spy satellite into orbit soon, a day after their first attempt crashed. \n\nPyongyang has pitched its military satellite as a ne…",
        "url": "https://www.spacewar.com/reports/N_Korea_will_correctly_put_spy_satellite_into_orbit_soon_Kims_sister_says_999.html",
        "urlToImage": "https://www.spxdaily.com/images-hg/korea-kim-sister-marker-hg.jpg",
      },
      {
        "title": "Grab Samsung's stylish ANC, AKG-powered Galaxy Buds Live at an exceptional discount from Amazon",
        "description": "The earbuds offer great sound, nice ANC, and can now be yours for even less",
        "url": "https://www.phonearena.com/news/galaxy-buds-live-discount-amazon_id147866",
        "urlToImage": "https://m-cdn.phonearena.com/images/article/147866-wide-two_1200/Grab-Samsungs-stylish-ANC-AKG-powered-Galaxy-Buds-Live-at-an-exceptional-discount-from-Amazon.jpg",
      },
      {
        "title": "WEMIX and Hub71 partner to grow global blockchain startup ecosystem",
        "description": "Partnership to bring WEMIX's blockchain expertise to Hub71+ Digital Assets specialist ecosystem, and leverages global network of startups and partners Fast-tracks setting up operations for startups in Abu Dhabi as a regional hub Offers dedicated support for M…",
        "url": "https://www.prnewswire.com/news-releases/wemix-and-hub71-partner-to-grow-global-blockchain-startup-ecosystem-301839983.html",
        "urlToImage": "https://mma.prnewswire.com/media/2090696/WEMIX_Hub71_partner_grow_global_blockchain_startup_ecosystem.jpg?p=facebook",
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
    <div className="Technology-page">
      <div className="Technology-news-container">
        <div className="Technology-news-section-left-container">
          <h2>Technology News</h2>
          {TechnologyNews && TechnologyNews.length > 0 ? (
            TechnologyNews.slice(0, 13).map((news, index) => (
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
            <p>No Technology news found.</p>
          )}
          {TechnologyNews.length > numToShow && (
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

export default TechnologyPage;
