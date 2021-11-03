import {useState, useEffect } from "react"
import { http } from "../../../service/http"

export const NewsHooks = ({method,url})=>{
    const [headlineNews, setHeadlineNews] = useState([]);
    const [newsData, setNewsData] = useState([]);

    const fetchNewsData = async(method,url)=>{
        const response = await http(method,url);
        setNewsData(response.data)
        const headlineNews = response.data.filter((data,idx) => {
            if(idx<5&&idx>0){
                return data;
            }
            return false;
        })
        setHeadlineNews(headlineNews);
    }

    useEffect(()=>{
        fetchNewsData(method,url);
    },[]);

    return{
        headlineNews,
        newsData,
    }
}