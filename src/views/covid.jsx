import { COVID_19 } from "../service/api_path"
import NewsCard from "../components/newsCard";
import Skeleton from "../components/skeleton";
import NewsSideCard from "../components/newsSideCard";
import {NewsHooks} from '../libs/helpers/hooks'
import { dateParser } from "../libs/helpers/date";

const Covid = () => {
    const {newsData,headlineNews} = NewsHooks({method:'get',url:COVID_19});


    const clickSave=(title)=>{
        console.log('clicked')
    //      selectedNews = newsData.find((news)=> news.title===title)
    //     //panggil store buat dispatch ('ADD_SAVED_NEWS',selectedNews);
    }

    return (
        <div>
                <h1 className="mx-2 text-2xl font-bold my-5">Berita Covid-19</h1>
                    <hr className="mx-2 "/>
            <section className="mx-2 flex flex-row flex-wrap">
                <div className="newst-news w-full lg:w-2/3 space-y-2 mt-5 p-3">
                    {
                        newsData.length > 0 ?
                        newsData.map((news,idx)=> <NewsCard key={idx} published={dateParser(news.publishedAt)} title={news.title} category="Berita Terkini" image={news.urlToImage} clickSave={clickSave} />)
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
