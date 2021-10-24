import React, {useState, useEffect } from "react"
import { http } from "../service/http"
import { TOP_HEADLINES } from "../service/api_path"
import Slider from "react-slick";
import NewsCard from "../components/newsCard";
import Skeleton from "../components/skeleton";
import NewsSideCard from "../components/newsSideCard";

const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    className: "slider variable-width",
    customPaging: () => (
        <span className="w-6 h-1.5 bg-red-500 absolute bottom-8 sm:bottom-16 lg:bottom-6 xl:bottom-8 cursor-pointer hover:bg-red-600"></span>
      )
  };

const Home = () => {
    const [headlineNews, setHeadlineNews] = useState([]);
    const [newstNews, setNewstNews] = useState([]);
    const fetchData = async()=>{
        const response = await http('get',TOP_HEADLINES);
        setNewstNews(response.data)
        const headlineNews = response.data.filter((data,idx) => {
            if(idx<5&&idx>0){
                return data;
            }
            return false;
        })
        setHeadlineNews(headlineNews);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
            <Slider {...settings} className="w-full px-2 md:w-10/12 xl:w-9/12 h-full sm:h-80 lg:h-96 mx-auto my-5 lg:my-10">
                {
                    headlineNews&&headlineNews.map((news,idx)=>{
                        return(
                            <div className="relative h-full" key={idx}>
                                <img src={news.urlToImage} alt="headline-news" className="w-full xl:h-96" />
                                <div className="bg-gray-900 bg-opacity-60 w-full h-26 absolute bottom-0 z-10 p-4 space-y-3">
                                    <p className="lg:text-xl font-semibold">{news.title}</p>
                                    <p className="text-xs lg:text-small">{news.publishedAt}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
                <h1 className="mx-2 text-2xl font-bold my-5">Berita Terkini</h1>
                    <hr className="mx-2 "/>
            <section className="mx-2 flex flex-row space-x-3 flex-wrap">
                <div className="newst-news w-full lg:w-2/3 space-y-2 mt-5">
                    {
                        newstNews.length > 0 ?
                        newstNews.map((news,idx)=> <NewsCard key={idx} published={news.publishedAt} title={news.title} category="Berita Terkini" image={news.urlToImage} />)
                        :
                        <div className="space-y-5 mt-5">
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                        </div>
                    }
                </div>
                <div className="popular-news w-full lg:w-1/3">
                    <h1 className="text-2xl font-bold my-3">Trending</h1>
                    <div className="space-y-2">
                        {
                            headlineNews.length > 0?
                            headlineNews.map((news,idx)=> <NewsSideCard key={idx}  title={news.title} category="Trending" image={news.urlToImage} />)
                            :
                            <div className="space-y-5 mt-5">
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                                <Skeleton/>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
