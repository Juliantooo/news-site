import React, {useState, useEffect } from "react"
import { http } from "../service/http"
import { COVID_19 } from "../service/api_path"
import NewsCard from "../components/newsCard";
import Skeleton from "../components/skeleton";
import NewsSideCard from "../components/newsSideCard";

const Covid = () => {
    const [headlineNews, setHeadlineNews] = useState([]);
    const [newstNews, setNewstNews] = useState([]);

    const fetchData = async()=>{
        const response = await http('get',COVID_19);
        
        setNewstNews(response.data);
        const headlineNews = response.data.filter((data,idx) => {
            if(idx<5&&idx>0){
                return data;
            }
            return false;
        })
        setHeadlineNews(headlineNews);
    }

    const clickSave=(title)=>{
        console.log('clicked')
    //      selectedNews = newsData.find((news)=> news.title===title)
    //     //panggil store buat dispatch ('ADD_SAVED_NEWS',selectedNews);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
                <h1 className="mx-2 text-2xl font-bold my-5">Berita Covid-19</h1>
                    <hr className="mx-2 "/>
            <section className="mx-2 flex flex-row flex-wrap">
                <div className="newst-news w-full lg:w-2/3 space-y-2 mt-5 p-3">
                    {
                        newstNews.length > 0 ?
                        newstNews.map((news,idx)=> <NewsCard key={idx} published={news.publishedAt} title={news.title} category="Berita Terkini" image={news.urlToImage} clickSave={clickSave} />)
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
                <div className="popular-news w-full lg:w-1/3 p-3">
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

export default Covid
